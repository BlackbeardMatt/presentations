import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { MaterialModule } from './material.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    NgxsModule.forRoot([], { developmentMode: true }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
