import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastRecordService {

  constructor(private HttpClient: HttpClient) { }

  getLastRecord() {
    return this.HttpClient.get('http://localhost:5000/api/WordBook/last'); // gets the last record
  }
}
