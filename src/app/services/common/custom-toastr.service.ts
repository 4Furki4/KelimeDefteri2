import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string, type: ToastrType, position: ToastrPosition, configs: ToastrConfigs) {
    this.toastr.success(message, title, {
      timeOut: configs.timeout,
      progressBar: configs.progressBar,
      positionClass: 'toast-top-right'
    });
  }
}


export enum ToastrType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}
export enum ToastrPosition {
  TopRight = 'toast-top-right',
  TopLeft = 'toast-top-left',
  TopCenter = 'toast-top-center',
  TopFullWidth = 'toast-top-full-width',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  BottomCenter = 'toast-bottom-center',
  BottomFullWidth = 'toast-bottom-full-width',
}

export class ToastrConfigs {
  timeout!: number;
  progressBar!: boolean;
}
