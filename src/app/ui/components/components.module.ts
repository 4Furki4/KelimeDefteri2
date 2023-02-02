import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CreateRecordModule } from './create-record/create-record.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CreateRecordModule,
  ]
})
export class ComponentsModule { }
