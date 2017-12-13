import { Component } from '@angular/core';
import {
    ENgxDatetimepickerDirective
} from '../../src/e-ngx-datetimepicker.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    datetimepicker: ENgxDatetimepickerDirective;
    datetime: any;
    options: any = {
        format: 'YYYY-MM-DD hh:mm:ss'
    };

    constructor() {
    }

    onReady($event: ENgxDatetimepickerDirective) {
        this.datetimepicker = $event;
    }

    onChangeDate($event: any) {
        console.log('change', $event);
    }

    onUpdateDate($event: any) {
        console.log('update', $event);
    }

    setMinDate() {
        this.datetimepicker.getFn('minDate')('2017-05-01');
    }

    clearDate() {
        this.datetime = null;
    }

}
