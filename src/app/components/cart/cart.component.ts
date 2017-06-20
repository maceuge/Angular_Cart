import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.services';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
})

export class CartComponent implements OnInit {

  products: any;
  details: any;

  constructor(private CartService: CartService) {}

  ngOnInit () {
    // this.products = this.CartService.getProducts();
    this.products = JSON.parse(localStorage.getItem("item_2"));

    // this.products = {
    //
    //   for (let item in localStorage) {
    //
    //   }
    //   Storage.prototype.getObject = function(key) {
    //   return JSON.parse(this.getItem(key));
    //   }
    // }

    this.details = this.CartService.getDetail();
  }

  keys() {
    return Object.keys(this.products);
  }

  checkOut () {
    let i: number = 1
    do {
      localStorage.removeItem("item_"+i);
      i += 1;
    } while (localStorage.length > 1)

  }


}
