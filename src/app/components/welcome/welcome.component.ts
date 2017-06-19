import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';

@Component ({
  selector: 'welcome',
  template: `<h2 class="text-center">Bienvenido a UniverMag</h2>
  <p class="text-center">Una Tienda en donde puedes conseguir todo!</p>
  <p class="text-center">{{getUser() }}</p>`,
  providers: [AuthService]
})

export class WelcomeComponent implements OnInit {

  constructor (private auth: AuthService) {}

  getUser (){
    let user = this.auth.getUser();
    return user;
  }

  ngOnInit (){
    this.auth.checkSession();
  }

}
