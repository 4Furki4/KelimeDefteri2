import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordComponent } from './create-record.component';

const routes: Routes = [
  { path: '', component: CreateRecordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecordRoutingModule { }
