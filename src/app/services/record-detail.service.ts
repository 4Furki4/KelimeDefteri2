import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Record } from '../Record/Concretes/Record';
import { CustomHttpService } from './common/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class RecordDetailService {

  constructor(private customHttp: CustomHttpService) {

  }
  record$ !: Observable<any>;
  getRecord(query: string) {
    this.record$ = this.customHttp.get({
      controller: 'WordBook',
    }, query).pipe(shareReplay(1));
  }
}
