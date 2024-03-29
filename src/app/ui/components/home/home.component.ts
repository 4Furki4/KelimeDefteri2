import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Record } from 'src/app/Record/Concretes/Record';
import { ThemeService } from 'src/app/services/common/theme.service';
import { LastrecordService } from 'src/app/services/home/lastrecord.service';

const RECORD_ICON =
	`
  <svg fill="" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
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
const CALENDAR_ICON = `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="#673AB7" focusable="false"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>`
@Component({
	selector: 'KD-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent extends BaseComponent {
	constructor(spinner: NgxSpinnerService, private router: Router,
		iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
		private lastRecordService: LastrecordService,
		private themeService: ThemeService) {
		super(spinner)
		iconRegistry.addSvgIconLiteral('record', sanitizer.bypassSecurityTrustHtml(RECORD_ICON));
		iconRegistry.addSvgIconLiteral('calendar', sanitizer.bypassSecurityTrustHtml(CALENDAR_ICON));
	}
	panelOpenState = true;
	Record!: Record;

	isDark$ = this.themeService.darkMode$;
	ngOnInit(): void {
		this.themeService.darkMode$.subscribe(data => {
			console.log(data);
		})
		this.showSpinner(SpinnerType.Ball8Bits);
		this.lastRecordService.lastRecord$.subscribe({
			next: (data: any) => {
				this.Record = data as Record;
				data.created = data.created.split('.').reverse().join('-');
				this.Record.Created = data.created;
				this.hideSpinner(SpinnerType.Ball8Bits);
			},
			error: (error) => {
				console.log(error); // Error handling will be done here
				this.hideSpinner(SpinnerType.Ball8Bits);
			},
			complete: () => {
				this.hideSpinner(SpinnerType.Ball8Bits);
			}
		})
	}
}
