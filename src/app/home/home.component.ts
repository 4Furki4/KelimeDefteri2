import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../base/base.component';
import { Record } from '../Record/Concretes/Record';
import { LastRecordService } from './last-record.service';
const RECORD_ICON =
  `
  <svg fill="#673AB7" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490.899 490.899" xml:space="preserve">
<g>
	<path d="M474.5,330.849l-104.3-104.3v-167.8c0-11.5-9.4-20.9-20.9-20.9h-73v-16.6c0-11.5-9.4-20.9-20.9-20.9H114.8
		c-11.5,0-20.9,9.4-20.9,20.9v16.7h-73c-11.5,0-20.9,9.4-20.9,20.9v410.8c0,11.5,9.4,20.9,20.9,20.9h328.4
		c11.5,0,20.9-9.4,20.9-20.9v-30.3c21.6,21.6,65.1,20.5,95.9-10.3C495.3,399.649,499.5,355.849,474.5,330.849z M135.6,41.049h99
		v35.4h-99V41.049z M40.8,449.649v-370.1H94v16.7c0,11.5,9.4,20.9,20.9,20.9h140.6c10.4,0,19.8-9.4,20.9-19.8v-17.8h52.1v115.6
		l-89.7-16.6c-7-3-25,3.1-22.9,22.9l17.7,95.9c0,4.2,2.1,7.3,5.2,10.4l89.7,89.7v52.1H40.8V449.649z M436.9,399.649
		c-8.3,7.3-27.1,18.5-40.7,8.3l-124-124l-11.5-60.5l59.4,11.5l125.1,125.1C452.6,367.349,451.5,385.049,436.9,399.649z"/>
</g>
</svg>
  `;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent extends BaseComponent implements OnInit {
  Record!: Record;
  panelOpenState = true;
  routerLink = '/wordbook/detail/';
  constructor(spinner: NgxSpinnerService, private lastRecordService: LastRecordService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    super(spinner)
    iconRegistry.addSvgIconLiteral('record', sanitizer.bypassSecurityTrustHtml(RECORD_ICON));
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.Ball8Bits);
    this.lastRecordService.lastRecord$.subscribe(
      {
        next: (data: any) => {
          this.Record = data as Record;
          console.log(this.Record);
          console.log(data.created);
          data.created = data.created.split('.').reverse().join('-');
          console.log(data.created);
          this.Record.Created = data.created;
          this.routerLink += this.Record.Created;
          console.log(this.routerLink)
        },
        error: (error) => {
          console.log(error); // Error handling will be done here
        }
      }
    )

  }
}
