import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  show(message: string, title: string, type: ToastrType, position: ToastrPosition, configs: Partial<ToastrConfigs>) {
    this.toastr[type](message, title, {
      timeOut: configs.timeOut,
      progressBar: configs.progressBar,
      positionClass: position,
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
  timeOut!: number;
  progressBar!: boolean;
}
