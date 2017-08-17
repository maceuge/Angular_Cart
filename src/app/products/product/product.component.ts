import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from './product.services';
import {CartService} from '../cart/cart.services';
import {AuthService} from '../../components/login/auth.services';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CartService, ProductService, AuthService]
})

export class ProductComponent implements OnInit{

  products: Product[];

  constructor (
    private apiService : ProductService,
    private auth : AuthService
  ) {}

  getProduct () {
    this.apiService.getProductsObserv()
      .subscribe(product => this.products = product);
  }

  ngOnInit () {
    this.auth.checkSession();
    this.getProduct();
  }


}
