import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	datetime: any;
	options: any = {
		format: 'YYYY-MM-DD hh:mm:ss'
	};

	constructor () {}

	onChangeDate ($event: any) {
		console.log($event);
	}
}
