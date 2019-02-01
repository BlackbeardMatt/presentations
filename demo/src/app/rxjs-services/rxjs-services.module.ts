import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsServicesRoutingModule } from './rxjs-services-routing.module';
import { RxjsPageComponent } from './containers/rxjs-page/rxjs-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RxjsServicesRoutingModule,
    RouterModule
  ],
  declarations: [RxjsPageComponent]
})
export class RxjsServicesModule { }
