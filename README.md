# essence-ng2-datetimepicker

essence-ng2-datetimepicker is a datetimepicker directive for Angular.

## Usage

1. Install

	```shell
	npm install --save essence-ng2-datetimepicker
	```
	
2. 在index.html引入jquery、bootstrap、bootstrap-datetimepicker

	```html
	<link href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/bootstrap-datetimepicker/4.17.45/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
    
    <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="http://cdn.bootcss.com/moment.js/2.17.1/moment.min.js"></script>
    <script src="http://cdn.bootcss.com/moment.js/2.17.1/moment-with-locales.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap-datetimepicker/4.17.45/js/bootstrap-datetimepicker.min.js"></script>
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

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
