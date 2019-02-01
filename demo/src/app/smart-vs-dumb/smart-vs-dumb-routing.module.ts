import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartComponent } from './containers/smart/smart.component';

const routes: Routes = [
  {
    path: 'demo',
    component: SmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartVsDumbRoutingModule { }
