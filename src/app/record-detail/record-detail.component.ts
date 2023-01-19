import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    const query = this.route.snapshot.paramMap.get('query') ?? '';
    this.recService.getData(query).subscribe({
      next: (data: any) => {
        console.log(data);
        this.Record = data as Record;
        console.log(data.created);
        this.Record.CreatedDate = new Date(data.created as string);
        // data parsing will be done here
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
          this.navRoute.navigateByUrl('**', { skipLocationChange: true }); // navigate to not found page if record not found
        }
        else if (err.status == 500) {
          // handle Internal Server Error
        }
      }
    })
  }
}