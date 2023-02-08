import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Record } from 'src/app/Record/Concretes/Record';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { ThemeService } from 'src/app/services/common/theme.service';
import { DetailService } from 'src/app/services/detail/detail.service';
const CALENDAR_ICON = `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="#673AB7" focusable="false"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>`

@Component({
  selector: 'KD-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.sass']
})
export class RecordDetailComponent extends BaseComponent implements OnInit {
  Record !: Record
  panelOpenState = true;
  constructor(private detailService: DetailService, private navRoute: Router,
    private activatedRoute: ActivatedRoute, private toastr: CustomToastrService,
    private themeService: ThemeService, spinner: NgxSpinnerService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,) {
    iconRegistry.addSvgIconLiteral('calendar', sanitizer.bypassSecurityTrustHtml(CALENDAR_ICON));
    super(spinner);
    this.showSpinner(SpinnerType.Ball8Bits);
  }
  isDark$ = this.themeService.darkMode$;
  ngOnInit(): void {
    const query = this.activatedRoute.snapshot.paramMap.get('query') ?? '';
    console.log(query);
    this.detailService.getRecord(query).subscribe({
      next: (data: any) => {
        this.Record = data as Record;
        data.created = data.created.split('.').reverse().join('-');
        this.Record.Created = data.created;
        this.hideSpinner(SpinnerType.Ball8Bits)
      },
      error: (err: any) => {
        this.hideSpinner(SpinnerType.Ball8Bits)
        console.log(err);

        this.toastr.show("Record not found", "Error", ToastrType.Error, ToastrPosition.TopRight, {
          timeOut: 2000,
          progressBar: true,
        });
      },
      complete: () => {
        console.log("completed");
      }
    })
  }

}


