import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsServicesRoutingModule } from './rxjs-services-routing.module';
import { RxjsPageComponent } from './containers/rxjs-page/rxjs-page.component';
import { RouterModule } from '@angular/router';
import { CorporateCardComponent } from './components/corporate-card/corporate-card.component';
import { NonsenseCardComponent } from './components/nonsense-card/nonsense-card.component';
import { MaterialModule } from '../material.module';
import { CorporateNonsenseRxjsService } from './services/corporate-nonsense-rxjs.service';

@NgModule({
  imports: [
    CommonModule,
    RxjsServicesRoutingModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [RxjsPageComponent, CorporateCardComponent, NonsenseCardComponent],
  providers: [CorporateNonsenseRxjsService]
})
export class RxjsServicesModule { }
