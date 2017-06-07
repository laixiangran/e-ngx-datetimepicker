/**
 * Created by laixiangran on 2016/11/29.
 * homepage：http://www.laixiangran.cn.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {
	EssenceNg2DatetimepickerDirective
} from "./essence-ng2-datetimepicker.directive";

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [EssenceNg2DatetimepickerDirective],
	exports: [EssenceNg2DatetimepickerDirective]
})
export class EssenceNg2DatetimepickerModule {
}
