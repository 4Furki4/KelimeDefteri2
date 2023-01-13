import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastRecordService {

  constructor(private HttpClient: HttpClient) { }

  lastRecord$: Observable<Object> = this.HttpClient.get('http://localhost:5000/api/WordBook/last').pipe(shareReplay(1)); // gets the last record

}
