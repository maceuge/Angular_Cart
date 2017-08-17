import {Injectable} from '@angular/core';
import {Product} from '../product';
import {NavBarComponent} from '../../navbar/navbar.component';

@Injectable()

export class CartService {
  private products: any;
  private detail: any;

  constructor(
    private home: NavBarComponent,
  ) {
    this.products = {}
    this.detail = {total: 0, items: 0}
  }

  getProducts () {
    return this.products;
  }

  getDetail () {
    return this.detail;
  }

  addToCart (product: Product) {
    if (!this.products[product.id]) {
          this.products[product.id] = {
            quantity: 1,
            id: product.id,
            name: product.name,
            price: product.price
          }
        // this.addToLocalStorage(product);
    } else {
        this.products[product.id].quantity += 1;
        // this.updateLocalStorage(product);
    }

    this.detail.total += product.price;
    this.detail.items += 1;
    this.home.setCartItems(this.detail.items);
  }

  // addToLocalStorage (product) {
  //   localStorage.setItem("item_"+product.id, JSON.stringify(this.products[product.id]));
  // }
  //
  // updateLocalStorage (product) {
  //   localStorage.removeItem("item_"+product.id);
  //   localStorage.setItem("item_"+product.id, JSON.stringify(this.products[product.id]));
  // }


}
