/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import { Directive, ElementRef, Input, Output, OnInit, OnDestroy, Self, EventEmitter, Renderer2 } from "@angular/core";
import { ControlValueAccessor, NgModel } from "@angular/forms";

@Directive({
    selector: "[essence-ng2-datetimepicker][ngModel]",
    providers: [NgModel]
})
export class EssenceNg2DatetimepickerDirective implements ControlValueAccessor, OnInit, OnDestroy {
    private el: HTMLElement;
    private cd: NgModel;
    public render: Renderer2;
    private currentDate: any;
    private defaultOptions: any = {
        locale: 'zh-cn',
        ignoreReadonly: true
    };
    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;

    // 输入属性
    @Input() set options(options: any) {
        this.destroy();
        this.defaultOptions = $.extend(true, this.defaultOptions, options);
        this.commonPicker(this.defaultOptions);
    }

    // 事件
    @Output() ready: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() showPicker: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() hidePicker: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() changeDate: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() updateDate: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() errorDate: EventEmitter<any> = new EventEmitter<any>(false);

    constructor(@Self() ngModel: NgModel,
                public renderer: Renderer2,
                public elRef: ElementRef) {

        this.el = elRef.nativeElement;
        this.render = renderer;
        this.cd = ngModel;
        this.cd.valueAccessor = this;
    }

    ngOnInit() {
        this.initEvent();
        this.ready.emit(this);
    }

    ngOnDestroy() {
        this.destroy();
    }

    private initEvent() {
        this.commonPicker().on('dp.show', (ev) => {
            this.commonFn('viewMode')(this.commonFn('viewMode')());
            this.showPicker.emit(ev.date && this.format(ev.date.toDate(), this.commonFn('format')()));
        });

        this.commonPicker().on('dp.hide', (ev) => {
            this.hidePicker.emit(ev.date && this.format(ev.date.toDate(), this.commonFn('format')()));
        });

        this.commonPicker().on('dp.change', (ev) => {
            let id: number = window.setTimeout(() => {
                window.clearTimeout(id);
                let currentDate: string = this.format(ev.date.toDate(), this.commonFn('format')());
                this.writeValue(currentDate);
                this.changeDate.emit(currentDate);
            });
        });

        this.commonPicker().on('dp.update', (ev) => {
            this.updateDate.emit(ev);
        });

        this.commonPicker().on('dp.error', (ev) => {
            this.errorDate.emit(ev);
        });
    }

    private commonPicker(options?: any): any {
        return $(this.el)['datetimepicker'](options);
    }

    private commonFn(fnName: string): Function {
        return $(this.el)['data']("DateTimePicker") ? $(this.el)['data']("DateTimePicker")[fnName] : () => {};
    }

    /**
     * 销毁
     */
    destroy() {
        this.commonFn('destroy')();
    }

    /**
     * 显示
     */
    show() {
        this.commonFn('show')();
    }

    /**
     * 隐藏
     */
    hide() {
        this.commonFn('hide')();
    }

    getFn(fnName: string): Function {
        return this.commonFn(fnName);
    }

    private format(value: any, fmt: string) {
        let date: Date = new Date(value);
        let o = {
            "M+": date.getMonth() + 1, //月份
            "D+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

    // 以下实现ControlValueAccessor接口的方法
    writeValue(value: any): void {
        if (value) {
            if ((new Date(value).toString() != 'Invalid Date')) {
                this.currentDate = this.format(value, this.commonFn('format')());
                this.render.setProperty(this.el, 'value', this.currentDate);
                this.onChange(this.currentDate);
            } else {
                throw `${value} - 无效的日期，请检查！`
            }
        } else {
            this.render.setProperty(this.el, 'value', '');
        }
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }
}
