import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CustomHttpService } from '../common/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  query: string = '';
  constructor(private customHttp: CustomHttpService) {
  }
  record$ !: Observable<any>;
  getRecord(query: string) {
    return this.customHttp.get({
      controller: 'WordBook',
    }, query);
  }
}
