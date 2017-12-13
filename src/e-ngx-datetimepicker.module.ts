/**
 * Created by laixiangran on 2016/11/29.
 * homepage：http://www.laixiangran.cn.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
	ENgxDatetimepickerDirective
} from './e-ngx-datetimepicker.directive';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [ENgxDatetimepickerDirective],
	exports: [ENgxDatetimepickerDirective]
})
export class ENgxDatetimepickerModule {
}
