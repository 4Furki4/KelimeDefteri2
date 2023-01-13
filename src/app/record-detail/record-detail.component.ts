import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, shareReplay } from 'rxjs';
import { Record } from '../Record/Concretes/Record';
import { RecordDetailService } from './record-detail.service';


@Component({
  selector: 'KD-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.sass']
})
export class RecordDetailComponent implements OnInit {
  panelOpenState = true;
  constructor(private recService: RecordDetailService, private route: ActivatedRoute, private navRoute: Router) { }
  Record !: Record;
  query !: string;
  message !: any;
  ngOnInit(): void {
    this.route.paramMap.pipe(map(params => {
      this.query = params.get('query') ?? '';
      return this.query;
    })).subscribe(query => {
      this.recService.query$.next(query);
      console.log(query);
    });
    if (this.recService.theRecord$ === null) {
      console.log("therecord is null")
    }

    this.recService.theRecord$.subscribe({
      next: (data) => {
        console.log(data);
        this.Record = data as Record;
        // data parsing will be done here
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
          this.navRoute.navigateByUrl('**', { skipLocationChange: true }); // navigate to not found page if record not found
        }
        else if (err.status == 400) {
          // handle bad request error
        }
      }
    });
  }
}

    // this.recService.theRecord$.subscribe({
    //   next: (data: Record) => {
    //     this.Record = data as Record;
    //     // data parsing will be done here
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     if (err.status == 404) {
    //       this.navRoute.navigateByUrl('**', { skipLocationChange: true }); // navigate to not found page if record not found
    //     }
    //     else if (err.status == 400) {
    //       // handle bad request error
    //     }
    //   }
    // })