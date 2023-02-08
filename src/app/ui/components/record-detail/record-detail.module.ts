import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordDetailComponent } from './record-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecordDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        { path: '', component: RecordDetailComponent }
      ]
    ),
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RecordDetailModule { }
