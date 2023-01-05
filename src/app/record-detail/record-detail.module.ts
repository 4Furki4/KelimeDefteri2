import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { RecordDetailRoutingModule } from './record-detail-routing.module';
import { RecordDetailComponent } from './record-detail.component';


@NgModule({
  declarations: [RecordDetailComponent],
  imports: [
    CommonModule,
    RecordDetailRoutingModule,
    MatExpansionModule
  ]
})
export class RecordDetailModule { }
