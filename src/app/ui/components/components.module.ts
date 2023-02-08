import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CreateRecordModule } from './create-record/create-record.module';
import { RecordDetailModule } from './record-detail/record-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CreateRecordModule,
    RecordDetailModule
  ]
})
export class ComponentsModule { }
