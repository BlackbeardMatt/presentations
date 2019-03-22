import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
