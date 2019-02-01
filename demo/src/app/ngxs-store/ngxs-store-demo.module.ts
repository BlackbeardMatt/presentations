import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from '../material.module';
import { CorporateCardComponent } from './components/corporate-card/corporate-card.component';
import { NonsenseCardComponent } from './components/nonsense-card/nonsense-card.component';
import { NgxsPageComponent } from './containers/ngxs-page/ngxs-page.component';
import { NgxsStoreRoutingModule } from './ngxs-store-routing.module';
import { CorporateNonsenseState } from './store/state/corporate-nonsense.state';
import { SuperDealComponent } from './components/super-deal/super-deal.component';


@NgModule({
  imports: [
    CommonModule,
    NgxsStoreRoutingModule,
    NgxsModule.forFeature([
      CorporateNonsenseState
    ]),
    MaterialModule,
  ],
  declarations: [
    NgxsPageComponent,
    CorporateCardComponent,
    NonsenseCardComponent,
    SuperDealComponent
  ]
})
export class NgxsStoreDemoModule { }
