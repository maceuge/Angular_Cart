import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ApiService} from '../api.services';
import {CartService} from '../cart.services';
import {AuthService} from '../../components/login/auth.services';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CartService, ApiService, AuthService]
})

export class ProductComponent implements OnInit{

  products: Product[];

  constructor (
    private apiService : ApiService,
    private auth : AuthService
  ) {}

  // getProducts () {
  //   this.apiService.getProducts().then(
  //     (products) => {
  //       this.products = products
  //     }
  //   )
  // }

  getProduct () {
    this.apiService.getProductsObserv()
      .subscribe(product => this.products = product);
  }

  ngOnInit () {
    this.auth.checkSession();
    // this.getProducts();
    this.getProduct();
  }


}
