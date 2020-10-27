import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'date-picker';
  dataValue:Date;

  /**
   *
   */
  constructor() {
   this.dataValue = new Date();
  }

  onSubmit(form: NgForm) {

  }
}
