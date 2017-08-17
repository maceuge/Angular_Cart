import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.services';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
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

  // getDataInLocalStorage () {
  //   for (var i = 1; i <= localStorage.length; i++) {
  //     let data = JSON.parse(localStorage.getItem("item_"+i));
  //      if (data !== null) {
  //        this.products.push(data);
  //      }
  //   }
  // }

  // checkOut () {
  //   let i: number = 1
  //   do {
  //     localStorage.removeItem("item_"+i);
  //     i += 1;
  //   } while (localStorage.length > 1)
  // }


}
