import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartVsDumbRoutingModule } from './smart-vs-dumb-routing.module';
import { SmartComponent } from './containers/smart/smart.component';
import { DumbComponent } from './components/dumb/dumb.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    SmartVsDumbRoutingModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [SmartComponent, DumbComponent]
})
export class SmartVsDumbModule { }
