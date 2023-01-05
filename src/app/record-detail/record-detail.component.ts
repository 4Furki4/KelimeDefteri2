import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Record } from '../Record/Concretes/Record';
import { RecordDetailService } from './record-detail.service';

@Component({
  selector: 'KD-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.sass']
})
export class RecordDetailComponent implements OnInit {

  constructor(private recService : RecordDetailService, private route : ActivatedRoute) { }
  Record !: Record;
  recDate !: string;
  message !: any;
  ngOnInit(): void {
    this.route.paramMap.pipe(map(params => {
      this.recDate = params.get('date')?? '';
      console.log(this.recDate)
      return this.recDate;
    })).subscribe();
    this.recService.GetRecord(this.recDate).subscribe({
      next: (data) => {
        console.log(data);
        // data parsing will be done here
    },
    error: (err) => {
      console.log(err);
      // error handling will be done here
    }
  })
  }
}
