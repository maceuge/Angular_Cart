import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.services';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {

  products: any;
  details: any;

  constructor(private CartService: CartService) {}

  ngOnInit () {
    this.products = this.CartService.getProducts();
    this.details = this.CartService.getDetail();
  }

  keys() {
    return Object.keys(this.products);
  }


}
