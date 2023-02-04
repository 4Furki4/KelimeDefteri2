import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CustomHttpService, HttpOptions } from '../common/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class LastrecordService {

  constructor(private customHttp: CustomHttpService) { }

  lastRecord$: Observable<any> = this.customHttp.get({
    controller: 'WordBook',
    action: 'last'
  }).pipe(shareReplay(1));
}
