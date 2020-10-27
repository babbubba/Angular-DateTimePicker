import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import * as moment from 'moment';

@Injectable()
export class CustomDateFormatter extends NgbDateParserFormatter {

    _format: string;
    readonly DELIMITER = '/';

    constructor() {
        super();
        this._format = 'DD/MM/YYYY';
    }

    parse(value: string): NgbDateStruct {
        if (value) {
            value = value.trim();
            let mdt = moment.utc(value, this._format)
            if (mdt.isValid) {
                let date: NgbDateStruct = { year: mdt.year(), month: mdt.month() + 1, day: mdt.date() }
                return date;
            }
        }
        return null;
    }
    format(date: NgbDateStruct): string {

        if (!date) return '';
        let mdt = moment([date.year, date.month - 1, date.day]);
        if (!mdt.isValid()) return '';
        let result = mdt.format(this._format);
        return result;
    }
}