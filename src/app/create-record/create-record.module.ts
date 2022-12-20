import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordRoutingModule } from './create-record-routing.module';
import { CreateRecordComponent } from './create-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [CreateRecordComponent],
  imports: [
    CommonModule,
    CreateRecordRoutingModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CreateRecordModule { }
