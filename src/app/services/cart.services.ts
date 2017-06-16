import {Injectable} from '@angular/core';
import {Product} from '../common/product';

@Injectable()

export class CartService {
  private products: any;
  private detail: any;

  constructor() {
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
          name: product.name,
          price: product.price
        }
    } else {
        this.products[product.id].quantity += 1;
    }

    this.detail.total += product.price;
    this.detail.items += 1;

  }


}
