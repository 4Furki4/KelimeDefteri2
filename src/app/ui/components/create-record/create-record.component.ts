import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'KD-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.sass']
})
export class CreateRecordComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.Ball8Bits);
    setTimeout(() => {
      this.hideSpinner(SpinnerType.Ball8Bits);
    }, 1000);
  }

}
