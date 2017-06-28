import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';
// import {CartService} from '../../services/cart.services';

@Component({
  selector: 'init-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService,]
})

export class HomeComponent implements OnInit{
  title: string = "Univer-MAG";
  cartItems: any;

  constructor (
    private auth: AuthService,
    // private cart: CartService,
  ) {
    this.cartItems = 0;
  }

  setCartItems(items) {
    this.cartItems = items;
  }

  logout () {
    this.auth.logout();
  }

  getUser (){
    let user = JSON.parse(this.auth.getUser());
    return user;
  }

  ngOnInit () {
      // this.cartItems = this.cart.getDetail();
      // console.log(this.cartItems);
      // console.log(this.cart.getDetail().items);
  }

  sessionStatus () {
    return this.auth.check();
  }


}
