import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';


import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {BoxComponent} from './components/product_grid/prodbox.component';
import {CartComponent} from './components/cart/cart.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DetailComponent} from './components/detail_product/detail.component';
import {AuthComponent} from './components/login/login.component';
import {CartBarComponent} from './components/cartbar/cartbar.component';
import {RegisterComponent} from './components/register/register.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBRm0cqOgmCiN4wPWGRqUK8JMSK22BPQaQ",
  authDomain: "angular2-cart.firebaseapp.com",
  databaseURL: "https://angular2-cart.firebaseio.com",
  projectId: "angular2-cart",
  storageBucket: "angular2-cart.appspot.com",
  messagingSenderId: "97271656441"
};

const routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'details/:id',
    component: DetailComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    BoxComponent,
    CartComponent,
    WelcomeComponent,
    DetailComponent,
    AuthComponent,
    CartBarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [
    HomeComponent
  ]

})

export class AppModule {}
