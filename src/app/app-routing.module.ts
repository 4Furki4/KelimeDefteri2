import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: 'wordbook', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./ui/components/home/home.module').then(m => m.HomeModule), title: 'Home - Kelime Defteri' },
      { path: 'add', loadChildren: () => import('./ui/components/create-record/create-record.module').then(m => m.CreateRecordModule), title: 'Add Record - Kelime Defteri ' },
    ]
  }
  // { path: '', redirectTo: 'wordbook/home', pathMatch: 'full' },
  // { path: 'wordbook/home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), title: 'Home - Kelime Defteri' },
  // { path: 'wordbook/add', loadChildren: () => import('./create-record/create-record.module').then(m => m.CreateRecordModule), title: 'Add Record - Kelime Defteri ' },
  // { path: 'wordbook/detail/:query', loadChildren: () => import('./record-detail/record-detail.module').then(m => m.RecordDetailModule), title: 'Detail - Kelime Defteri' },
  // { path: '**', component: NotFoundComponent, title: 'Not Found - Kelime Defteri' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
