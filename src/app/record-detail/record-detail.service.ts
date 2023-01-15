import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, shareReplay, Subject, switchMap } from 'rxjs';
import { Record } from '../Record/Concretes/Record';

@Injectable({
  providedIn: 'root'
})
export class RecordDetailService {
  private data$: any;

  constructor(private http: HttpClient) { }

  getData(query: string) {
    if (!this.data$) {
      this.data$ = this.http.get(`http://localhost:5000/api/WordBook/${query}`).pipe(
        shareReplay(1)
      );
    }
    return this.data$;
  }
}
