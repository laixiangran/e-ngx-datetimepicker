# e-ngx-datetimepicker

基于Angular的日期组件。

依赖的第三方插件：[bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)

## Usage

1. Install

	```shell
	npm install --save e-ngx-datetimepicker@latest
	```
	
2. Set in the .angular-cli.json（@angular/cli）

	```json
    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/e-ngx-datetimepicker/dist/assets/css/bootstrap-datetimepicker.min.css"
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/moment/min/moment.min.js",
        "../node_modules/moment/min/moment-with-locales.min.js",
        "../node_modules/e-ngx-datetimepicker/dist/assets/js/bootstrap-datetimepicker.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
	```

3. Add the ENgxDatetimepickerModule

	```typescript
	import {ENgxDatetimepickerModule} from "e-ngx-datetimepicker";
	@NgModule({
	    imports: [
	        ENgxDatetimepickerModule
	    ]
	})
	```

4. Use in Template

	**父元素必须设置position: relative**

	```html
	<form class="form-group" #form="ngForm">
		<div class="form-group" style="position: relative;">
			<label>
				选择日期：
				<input type="text" class="form-control"
					   eNgxDTPicker
					   #eNgxDTPicker="eNgxDTPicker"
					   name="time"
					   [(ngModel)]="datetime"
					   [options]="options"
					   required
					   readonly
					   (ready)="onReady($event)"
					   (changeDate)="onChangeDate($event)">
			</label>
		</div>
	</form>
	<button class="btn btn-primary" (click)="eNgDTPicker.getFn('minDate')('2017-05-01')">设置最小时间（模板调用）</button>
    <button class="btn btn-primary" (click)="setMinDate()">设置最小时间（组件类调用）</button>
    <button class="btn btn-danger" (click)="clearDate()">清空数据</button>
	```

5. Use in Component

	```typescript
	datetimepicker: ENgxDatetimepickerDirective;
    datetime: any;
    options: any = {
        format: 'YYYY-MM-DD hh:mm:ss'
    };

    constructor() {}

    onReady($event: ENgxDatetimepickerDirective) {
        this.datetimepicker = $event;
    }

    onChangeDate($event: any) {
        // console.log($event);
    }

    setMinDate() {
        this.datetimepicker.getFn('minDate')('2017-05-01');
    }

    clearDate() {
        this.datetime = null;
    }
	```

## API

### exportAs

- `eNgxDTPicker` - 导出的指令变量，可在模板获取指令类并调用（`#eNgxDTPicker="eNgxDTPicker"`）。

### Inputs

- `options`（`Object`） - 与[bootstrap-datetimepicker的配置属性](http://eonasdan.github.io/bootstrap-datetimepicker/Options/)一致

### Outputs

- `ready` - `return ($event)`; datetimepicker初始化完成的事件，$event为当前ENgxDatetimepickerDirective实例

- `changeDate` - `return ($event)`; 时间改变触发的事件，$event为改变之后的时间（由于这个事件触发的频率低，建议使用这个事件来获取改变之后的时间）

- `updateDate` - `return ($event)`; 时间视图（比如年视图切换到月视图）改变触发的事件，$event为改变之后的时间

### Instance Method

- `getFn(fnName: string): Function` - 根据函数名称获取bootstrap-datetimepicker函数

- `show(): void` - 显示日期控件

- `hide(): void` - 隐藏日期控件

- `destroy(): void` - 销毁日期控件

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
