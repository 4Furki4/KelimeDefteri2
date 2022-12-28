import { HttpClient } from '@angular/common/http';
import { Injectable, Self } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Record } from '../Record/Concretes/Record'
import { Word } from '../Record/Concretes/Word';
@Injectable({
  providedIn: 'root'
})
export class CreateRecordService {

  constructor(private HttpClient : HttpClient) { } //private HttpClient : HttpClient
  PostRecord(record : Record) {
    console.log(record);
    this.HttpClient.post('http://localhost:5000/api/WordBook', record)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
  }
  PrepareRecord(rec : FormGroup<any> ){
    let record : Record = new Record();
    rec.value.record.forEach((value : any) => {
      let word : Word = new Word();
      word.Name = value.name;
      word.Definitions = value.definitions;
      record.Words.push(word);
    })
    console.log(record);
    this.PostRecord(record);
  }
}

