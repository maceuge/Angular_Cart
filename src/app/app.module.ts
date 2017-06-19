import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {BoxComponent} from './components/product_grid/prodbox.component';
import {CartComponent} from './components/cart/cart.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DetailComponent} from './components/detail_product/detail.component';
import {AuthComponent} from './components/login/login.component';


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
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [
    HomeComponent
  ]

})

export class AppModule {}
