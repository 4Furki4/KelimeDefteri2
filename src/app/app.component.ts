import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title!: any;
  constructor(private router: Router) {
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
  }
}
