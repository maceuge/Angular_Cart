import {Component, Input} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Product} from '../../common/product';
import {CartService} from '../../services/cart.services';
import {Router} from '@angular/router';

@Component({
  selector: 'product-box',
  templateUrl: './prodbox.component.html',
  styleUrls: ['./prodbox.component.css'],
  animations: [
    trigger('productState', [
      state('inactive', style({
        backgroundColor: '',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#f0ad4e',
        transform: 'scale(0.9)'
      })),
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
})

export class BoxComponent {
  @Input() product: Product;

  constructor(
    private CartService: CartService,
    private router: Router
  ) {}

  add (product: Product) {
    this.product.state = 'active';
    setTimeout(() => {this.product.state = 'inactive'}, 300);
    this.CartService.addToCart(product);
  }

  goToDetail (product: Product) {
    let link = ['/details', product.id]
    this.router.navigate(link);
  }

}
