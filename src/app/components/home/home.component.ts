import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';
import {CartService} from '../../services/cart.services';

@Component({
  selector: 'init-page',
  templateUrl: './home.component.html',
  providers: [AuthService, CartService]
})

export class HomeComponent implements OnInit{
  title: string = "Univer-MAG";

  constructor (
    private auth: AuthService,
  ) {}


  logout () {
    this.auth.logout();
  }

  getUser (){
    let user = JSON.parse(this.auth.getUser());
    return user;
  }

  ngOnInit () {}

  sessionStatus () {
    return this.auth.check();
  }


}
