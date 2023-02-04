import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './home/home.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RequestInterceptor } from './HttpHandlers/request.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateRecordModule } from './create-record/create-record.module';
import { UIModule } from './ui/ui.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AppNavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    MatToolbarModule,
    HomeModule,
    UIModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    { provide: 'BASE_API_URL', useValue: 'http://localhost:5000/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
