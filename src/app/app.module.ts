import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutesModule} from "./app-routes.module";
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

// Material Modules
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

import {NavBarComponent} from './navbar/navbar.component';
import {ProductComponent} from './products/product/product.component';
import {BoxComponent} from './components/product_grid/prodbox.component';
import {CartComponent} from './products/cart/cart.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DetailComponent} from './products/detail_product/detail.component';
import {AuthComponent} from './components/login/login.component';
import {CartBarComponent} from './components/cartbar/cartbar.component';
import {RegisterComponent} from './components/register/register.component';
import {UserListComponent} from './components/users_list/user.component';
import {MovieComponent} from './components/movies/movie.component';
import {DribbleComponent} from './components/adribble/adribble.component';

import {SpinnerComponent} from './components/spinner/spinner.component';
import {SpinnerService} from './components/spinner/spinner.service';


@NgModule({
  declarations: [
    NavBarComponent,
    ProductComponent,
    BoxComponent,
    CartComponent,
    WelcomeComponent,
    DetailComponent,
    AuthComponent,
    CartBarComponent,
    RegisterComponent,
    UserListComponent,
    MovieComponent,
    SpinnerComponent,
    DribbleComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutesModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  providers:[
    SpinnerService
  ],
  bootstrap: [
    NavBarComponent
  ]

})

export class AppModule {}
