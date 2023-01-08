import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordRoutingModule } from './create-record-routing.module';
import { CreateRecordComponent } from './create-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { CreateRecordService } from './create-record.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [CreateRecordComponent],
  imports: [
    CommonModule,
    CreateRecordRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    CreateRecordService,
    HttpClient
  ]
})
export class CreateRecordModule { }
