import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorporateNonsenseService } from './services/corporate-nonsense.service';
import { CorporateNonsenseChatService } from './services/corporate-nonsense-chat.service';
import { RoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [CorporateNonsenseService, CorporateNonsenseChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
