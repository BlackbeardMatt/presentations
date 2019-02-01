import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxsPageComponent } from './containers/ngxs-page/ngxs-page.component';

const routes: Routes = [
  {
    path: 'demo',
    component: NgxsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxsStoreRoutingModule { }
