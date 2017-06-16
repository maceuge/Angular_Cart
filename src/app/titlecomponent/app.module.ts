import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

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
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]

})

export class AppModule {}
