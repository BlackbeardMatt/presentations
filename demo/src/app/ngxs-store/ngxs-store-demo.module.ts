import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from '../material.module';
import { NgxsPageComponent } from './containers/ngxs-page/ngxs-page.component';
import { NgxsStoreRoutingModule } from './ngxs-store-routing.module';
import { CorporateNonsenseState } from './store/state/corporate-nonsense.state';
import { SuperDealComponent } from './components/super-deal/super-deal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    NgxsStoreRoutingModule,
    NgxsModule.forFeature([
      CorporateNonsenseState
    ]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    NgxsPageComponent,
    SuperDealComponent
  ]
})
export class NgxsStoreDemoModule { }
