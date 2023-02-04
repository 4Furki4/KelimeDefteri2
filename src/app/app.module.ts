import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RequestInterceptor } from './HttpHandlers/request.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

import { UIModule } from './ui/ui.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
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
