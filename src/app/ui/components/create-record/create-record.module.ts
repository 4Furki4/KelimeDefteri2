import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './create-record.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CreateRecordComponent }
    ])
  ]
})
export class CreateRecordModule { }
