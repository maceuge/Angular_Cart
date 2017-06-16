import {Component, Input} from '@angular/core';
import {Product} from '../common/product';
import {CartService} from '../services/cart.services';

@Component({
  selector: 'product-box',
  templateUrl: './prodbox.component.html'
})

export class BoxComponent {
  @Input() product: Product;

  constructor(private CartService: CartService) {}

  add (product: Product) {
    this.CartService.addToCart(product);
  }

}
