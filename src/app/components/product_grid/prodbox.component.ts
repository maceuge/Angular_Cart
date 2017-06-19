import {Component, Input} from '@angular/core';
import {Product} from '../../common/product';
import {CartService} from '../../services/cart.services';
import {Router} from '@angular/router';

@Component({
  selector: 'product-box',
  templateUrl: './prodbox.component.html'
})

export class BoxComponent {
  @Input() product: Product;

  constructor(
    private CartService: CartService,
    private router: Router
  ) {}

  add (product: Product) {
    this.CartService.addToCart(product);
  }

  goToDetail (product: Product) {
    let link = ['/details', product.id]
    this.router.navigate(link);
  }

}
