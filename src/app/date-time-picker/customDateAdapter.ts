import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';


@Injectable()
export class CustomDateAdapter extends NgbDateAdapter<Date> {

    fromModel(date: Date): NgbDateStruct {
        // console.log('fromModel input <=', date);

        if (date) {
            let mdt = moment(date, 'YYYY-MM-DD');
            if (mdt.isValid) {
                let result: NgbDateStruct = { year: mdt.year(), month: mdt.month() + 1, day: mdt.date() }
                // console.log('fromModel output =>', result);
                return result;
            }
        }
        // console.log('fromModel output =>', null);
        return null;
    }

    toModel(date: NgbDateStruct): Date {
        // console.log('toModel input =>', date);

        let result = date ? new Date(date.year, date.month - 1, date.day) : null;
        // console.log('toModel output <=', result);
        return result;

    }
}