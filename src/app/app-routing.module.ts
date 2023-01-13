import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'wordbook/home', pathMatch: 'full' },
  { path: 'wordbook/home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'wordbook/add', loadChildren: () => import('./create-record/create-record.module').then(m => m.CreateRecordModule) },
  { path: 'wordbook/:query', loadChildren: () => import('./record-detail/record-detail.module').then(m => m.RecordDetailModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
