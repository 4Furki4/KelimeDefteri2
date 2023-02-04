import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './create-record.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    CreateRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CreateRecordComponent }
    ]),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxSpinnerModule
  ]
})
export class CreateRecordModule { }
