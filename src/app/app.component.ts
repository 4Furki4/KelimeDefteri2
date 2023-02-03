import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from './base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title!: any;
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.title = val.url.split('/')[2];
        if (this.title == 'home') {
          this.title = 'Kelime Defteri';
        }
        else if (this.title == 'add') {
          this.title = 'Yeni Kayıt Oluşturma';
        }
        else if (this.title == 'words') {
          this.title = 'Kelime Listesi';
        }
        else if (this.title == 'detail') {
          this.title = 'Kayıt Detayları';
        }
        else {
          this.title = 'Sayfa Bulunamadı';
        }
      }
    })
  }
  ngOnInit(): void {
    this.spinner.show("spinner_1");
    setTimeout(() => {
      this.spinner.hide("spinner_1");
    }, 1000)
  }
}
