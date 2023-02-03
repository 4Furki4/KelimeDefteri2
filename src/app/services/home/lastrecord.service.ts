import { Injectable } from '@angular/core';
import { CustomHttpService, HttpOptions } from '../common/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class LastrecordService {

  constructor(private customHttp: CustomHttpService) { }


  getLastRecord(urlOptions: Partial<HttpOptions>, callbackFunction: any) {
    return this.customHttp.get(urlOptions).subscribe({
      next: () => callbackFunction(),
    })
  }
}
