import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsStoreRoutingModule } from './ngxs-store-routing.module';
import { NgxsPageComponent } from './containers/ngxs-page/ngxs-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsStoreRoutingModule
  ],
  declarations: [NgxsPageComponent]
})
export class NgxsStoreModule { }
