import { Component } from '@angular/core';
import {
    EssenceNg2DatetimepickerDirective
} from "../../src/essence-ng2-datetimepicker.directive";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    datetimepicker: EssenceNg2DatetimepickerDirective
    datetime: any;
    options: any = {
        format: 'YYYY-MM-DD hh:mm:ss'
    };

    constructor() {}

    onReady($event: EssenceNg2DatetimepickerDirective) {
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

}
