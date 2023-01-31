import { NgxSpinnerService } from "ngx-spinner";


export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {
  }

  showSpinner(spinnerName: SpinnerType) {
    this.spinner.show(spinnerName);
  }

  hideSpinner(spinnerName: SpinnerType) {
    this.spinner.hide(spinnerName)
  }
}

export enum SpinnerType {
  Ball8Bits = "spinner_1",
  BallPulseSync = "spinner_2"
}
