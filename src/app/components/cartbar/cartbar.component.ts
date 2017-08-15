import {Component, OnInit} from '@angular/core';
import {CartService} from '../../products/cart.services';

@Component({
  selector: 'cart-bar',
  templateUrl: './cartbar.component.html'
})

export class CartBarComponent implements OnInit{
  cartDetail: any;

  constructor(
    private cartService: CartService,
  ){}

  ngOnInit(){
    this.cartDetail = this.cartService.getDetail();
  }
}
