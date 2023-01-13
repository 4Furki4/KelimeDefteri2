import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../Record/Concretes/Record';
import { LastRecordService } from './last-record.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  Record: Record = new Record();
  panelOpenState = true;
  constructor(private lastRecordService: LastRecordService, private router: Router) { }
  ngOnInit(): void {
    this.lastRecordService.lastRecord$.subscribe(
      {
        next: (data) => {
          this.Record = data as Record;
          console.log(this.Record);
        },
        error: (error) => {
          console.log(error); // Error handling will be done here
        }
      }
    )
  }
}
