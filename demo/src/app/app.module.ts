import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './material.module';
import { CorporateNonsenseChatService } from './services/corporate-nonsense-chat.service';
import { CorporateNonsenseService } from './services/corporate-nonsense.service';


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
