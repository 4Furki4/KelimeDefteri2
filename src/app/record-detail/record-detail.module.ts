import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { RecordDetailRoutingModule } from './record-detail-routing.module';
import { RecordDetailComponent } from './record-detail.component';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [RecordDetailComponent],
  imports: [
    CommonModule,
    RecordDetailRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class RecordDetailModule { }
