import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EssenceNg2DatetimepickerModule } from '../../src/essence-ng2-datetimepicker.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		EssenceNg2DatetimepickerModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
