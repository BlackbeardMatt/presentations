import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsPageComponent } from './containers/rxjs-page/rxjs-page.component';

const routes: Routes = [
  {
    path: 'demo',
    component: RxjsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsServicesRoutingModule { }
