import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Self } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Record } from '../Record/Concretes/Record'
import { Word } from '../Record/Concretes/Word';
@Injectable({
  providedIn: 'root'
})
export class CreateRecordService {

  constructor(private HttpClient : HttpClient) { }
  PrepareRecord(rec : FormGroup<any> ) : Record{ // It is used to prepare the record object from the form data.
    let record : Record = new Record();
    record.CreatedDate = rec.value.createdDate;
    rec.value.record.forEach((value : any) => { // value is the word object
      let word : Word = new Word();
      word.name = value.name;
      word.definitions = value.definitions;
      record.words.push(word);
    })
    return record;
  }
  PostRecord(record : Record) { // It is used to post the record object to the server.
    return this.HttpClient.post('http://localhost:5000/api/WordBook', record, {  observe: 'response' })
  }
}

