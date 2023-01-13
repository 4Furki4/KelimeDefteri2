import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, Subject, switchMap } from 'rxjs';
import { Record } from '../Record/Concretes/Record';

@Injectable({
  providedIn: 'root'
})
export class RecordDetailService {
  query$ = new Subject<string>();
  theRecord$: Observable<Record>;
  constructor(private HttpClient: HttpClient) {
    this.theRecord$ = this.query$.pipe(
      switchMap(query => this.HttpClient.get<Record>(`http://localhost:5000/api/WordBook/${query}`)),
      shareReplay(1)
    );
  }
}
