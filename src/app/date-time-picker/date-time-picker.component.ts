import { Component, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatter } from './customDateFormatter';
import { CustomDateAdapter } from './customDateAdapter';

@Component({
  selector: "app-date-time-picker",
  templateUrl: "./date-time-picker.component.html",
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    },
    {provide: NgbDateParserFormatter, useClass: CustomDateFormatter},
    {provide: NgbDateAdapter, useClass: CustomDateAdapter}
  ]
})

export class DateTimePickerComponent implements ControlValueAccessor
{

  originalValue:any;
  disabled: boolean = false;

  propagateChange = (_: any) => { };

  @Input() required: boolean = false;

  writeValue(bindValue: any): void {
    if(bindValue)
    {
      let d = new Date(bindValue);
      console.log('writeValue parsed date:', d);
      this.originalValue = new Date(bindValue);
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

	update($event) {
		this.propagateChange($event);
	}
}
