# essence-ng2-datetimepicker

essence-ng2-datetimepicker is a datetimepicker directive for Angular.

依赖的第三方插件：[bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)

## Usage

1. Install

	```shell
	npm install --save essence-ng2-datetimepicker@latest
	```
	
2. Set in the .angular-cli.json（@angular/cli）

    下载bootstrap-datetimepicker并放在如assets/scripts下，然后在.angular-cli.json配置：

	```json
    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "./assets/scripts/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/moment/min/moment.min.js",
        "../node_modules/moment/min/moment-with-locales.min.js",
        "./assets/scripts/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
	```

3. Add the EssenceNg2ChartDatetimepickerModule

	```typescript
	import {EssenceNg2ChartDatetimepickerModule} from "essence-ng2-datetimepicker";
	@NgModule({
	    imports: [
	        EssenceNg2ChartDatetimepickerModule
	    ]
	})
	```

4. template

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

5. component

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

- `ready` - `return ($event)`; datetimepicker初始化完成的事件，$event为当前EssenceNg2ChartDatetimepickerDirective实例

### Instance Method

- `show` - 显示日期控件

- `hide` - 隐藏日期控件

- `destroy` - 销毁日期控件

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
