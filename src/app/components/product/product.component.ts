import {Component, OnInit} from '@angular/core';
import {Product} from '../../common/product';
import {ApiService} from '../../services/api.services';
import {CartService} from '../../services/cart.services';
import {AuthService} from '../../services/auth.services';

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

  getProducts () {
    this.apiService.getProducts().then(
      (products) => {
        this.products = products
      }
    )
  }

  ngOnInit () {
    this.auth.checkSession();
    this.getProducts();
  }


}
