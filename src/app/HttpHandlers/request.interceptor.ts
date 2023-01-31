import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { BaseComponent, SpinnerType } from '../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class RequestInterceptor extends BaseComponent implements HttpInterceptor {

  private totalRequests = 0;

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('caught')
    this.totalRequests++;
    // this.showSpinner(SpinnerType.Ball8Bits);
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.totalRequests--;
          if (this.totalRequests == 0) {
            this.hideSpinner(SpinnerType.Ball8Bits)
          }
        })
      );
  }
}

