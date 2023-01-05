import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Record } from '../Record/Concretes/Record';

@Injectable({
  providedIn: 'root'
})
export class RecordDetailService {

  constructor(private HttpClient : HttpClient) { }
  GetRecord(date : string) {
    return this.HttpClient.get(`http://localhost:5000/api/WordBook/${date}`);
  }
}
