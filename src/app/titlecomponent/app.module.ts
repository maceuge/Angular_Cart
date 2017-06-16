import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BoxComponent} from './prodbox.component';
import {CartComponent} from './cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ]

})

export class AppModule {}
