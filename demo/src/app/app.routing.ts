import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
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
    loadChildren: './ngxs-store/ngxs-store-demo.module#NgxsStoreDemoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
