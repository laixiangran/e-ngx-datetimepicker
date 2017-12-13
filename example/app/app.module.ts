import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ENgxDatetimepickerModule } from '../../src/e-ngx-datetimepicker.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ENgxDatetimepickerModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
