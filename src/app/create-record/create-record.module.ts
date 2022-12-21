import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordRoutingModule } from './create-record-routing.module';
import { CreateRecordComponent } from './create-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CreateRecordComponent],
  imports: [
    CommonModule,
    CreateRecordRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CreateRecordModule { }
