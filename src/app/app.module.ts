import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './HttpHandlers/request.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

import { UIModule } from './ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    UIModule,
    ToastrModule.forRoot()
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
