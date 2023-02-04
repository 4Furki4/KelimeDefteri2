import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Record } from 'src/app/Record/Concretes/Record';
import { Word } from 'src/app/Record/Concretes/Word';
import { CustomHttpService } from '../common/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class CreateRecordService {

  constructor(private customClient: CustomHttpService) { }
  PrepareRecord(rec: FormGroup<any>): Record { // It is used to prepare the record object from the form data.
    let record: Record = new Record();
    let created = new Date(rec.value.createdDate);
    record.Created = `${created.getDate()}.${created.getMonth() + 1}.${created.getFullYear()}`
    console.log(record.Created);

    rec.value.record.forEach((value: any) => { // value is the word object
      let word: Word = new Word();
      word.name = value.name;
      word.definitions = value.definitions;
      record.words.push(word);
    })
    return record;
  }
  PostRecord<Record>(Record: any) {
    return this.customClient.post<Record>({
      controller: 'WordBook'
    }, Record);
  }
}
