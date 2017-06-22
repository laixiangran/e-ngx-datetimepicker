# essence-ng2-datetimepicker

essence-ng2-datetimepicker is a datetimepicker directive for Angular.

依赖的第三方插件：[bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)

## Usage

1. Install

	```shell
	npm install --save essence-ng2-datetimepicker@latest
	```
	
2. Set in the .angular-cli.json（@angular/cli）

	```json
    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/essence-ng2-datetimepicker/dist/assets/css/bootstrap-datetimepicker.min.css"
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/moment/min/moment.min.js",
        "../node_modules/moment/min/moment-with-locales.min.js",
        "../node_modules/essence-ng2-datetimepicker/dist/assets/js/bootstrap-datetimepicker.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
	```

3. Add the EssenceNg2DatetimepickerModule

	```typescript
	import {EssenceNg2DatetimepickerModule} from "essence-ng2-datetimepicker";
	@NgModule({
	    imports: [
	        EssenceNg2DatetimepickerModule
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
	                   essence-ng2-datetimepicker
	                   name="time"
	                   [(ngModel)]="datetime"
	                   [options]="options"
	                   #time="ngModel"
	                   required
	                   readonly
	                   (changeDate)="onChangeDate($event)">
	        </label>
	    </div>
	</form>
	```

5. Use in Component

	```typescript
	datetime: any;
    options: any = {
        format: 'YYYY-MM-DD hh:mm:ss'
    };

    onChangeDate ($event: any) {
        console.log(new Date($event));
    }
	```

## API

### Inputs

- `options`（`Object`） - 与[bootstrap-datetimepicker的配置属性](http://eonasdan.github.io/bootstrap-datetimepicker/Options/)一致

### Outputs

- `ready` - `return ($event)`; datetimepicker初始化完成的事件，$event为当前EssenceNg2DatetimepickerDirective实例

- `changeDate` - `return ($event)`; 时间改变触发的事件，$event为当前的时间

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
