/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

declare let $: any;

import {Directive, ElementRef, Input, Output, OnInit, OnDestroy, Self, EventEmitter, Renderer2} from "@angular/core";
import {ControlValueAccessor, NgModel} from "@angular/forms";

@Directive({
	selector: "[essence-ng2-datetimepicker][ngModel]",
	providers: [NgModel]
})
export class EssenceNg2ChartDatetimepickerDirective implements ControlValueAccessor, OnInit, OnDestroy {
	private el: HTMLElement;
	private cd: NgModel;
	private text: string | Date;
	private defaultOptions: any = {
		locale: 'zh-cn',
		ignoreReadonly: true
	};

	// 输入属性
	@Input() set options (options: any) {
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

	constructor (@Self() cd: NgModel,
				 private elRef: ElementRef) {

		this.el = elRef.nativeElement;
		this.cd = cd;
	}

	ngOnInit () {
		this.initEvent();
		this.ready.emit(this);
	}

	ngOnDestroy () {
		this.destroy();
	}

	private initEvent () {
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
				let momentDate: any = ev.date;
				if (typeof momentDate.toDate === 'function') {
					let currentDate: string = this.format(momentDate.toDate(), this.commonFn('format')());
					this.writeValue(currentDate);
					this.cd.viewToModelUpdate(currentDate);
					this.cd.viewModel = '';
					this.changeDate.emit(currentDate);
				}
			});
		});

		this.commonPicker().on('dp.update', (ev) => {
			this.updateDate.emit(ev);
		});

		this.commonPicker().on('dp.error', (ev) => {
			this.errorDate.emit(ev);
		});
	}

	private commonPicker (options?: any): any {
		return $(this.el)['datetimepicker'](options);
	}

	private commonFn (fName: string): Function {
		return $(this.el)['data']("DateTimePicker") ? $(this.el)['data']("DateTimePicker")[fName] : () => {
		};
	}

	/**
	 * 销毁
	 */
	destroy () {
		this.commonFn('destroy')();
	}

	/**
	 * 显示
	 */
	show () {
		this.commonFn('show')();
	}

	/**
	 * 隐藏
	 */
	hide () {
		this.commonFn('hide')();
	}

	private format (value: string, fmt: string) {
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
		for (let k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}

	// 以下实现ControlValueAccessor接口的方法
	writeValue (value: string | Date): void {
		this.text = value;
	}

	registerOnChange (fn: any): void {
	}

	registerOnTouched (fn: any): void {
	}
}
