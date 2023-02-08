import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Record } from 'src/app/Record/Concretes/Record';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { ThemeService } from 'src/app/services/common/theme.service';
import { RecordDetailService } from 'src/app/services/record-detail.service';
@Component({
  selector: 'KD-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.sass']
})
export class RecordDetailComponent implements OnInit {
  Record !: Record
  panelOpenState = true;
  query = new Subject<string>();
  constructor(private recService: RecordDetailService, private navRoute: Router, private activatedRoute: ActivatedRoute, private toastr: CustomToastrService, private themeService: ThemeService) { }
  isDark$ = this.themeService.darkMode$;
  ngOnInit(): void {

    const query = this.activatedRoute.snapshot.paramMap.get('query') ?? '';
    console.log(query);
    this.recService.getRecord(query);
    this.recService.record$.subscribe({
      next: (data: any) => {
        this.Record = data as Record;
        console.log(data.created);
        data.created = data.created.split('.').reverse().join('-');
        console.log(data.created);
        this.Record.Created = data.created;
      },
      error: (err: any) => {

        console.log(err);

        this.toastr.show("Record not found", "Error", ToastrType.Error, ToastrPosition.TopRight, {});
      },
      complete: () => {
        console.log("completed");
      }
    })
  }

}


