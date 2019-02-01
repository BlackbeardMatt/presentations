import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'smartvsdumb',
    loadChildren: './smart-vs-dumb/smart-vs-dumb.module#SmartVsDumbModule'
  },
  {
    path: 'rxjs',
    loadChildren: './rxjs-services/rxjs-services.module#RxjsServicesModule'
  },
  {
    path: 'ngxs',
    loadChildren: './ngxs-store/ngxs-store.module#NgxsStoreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
