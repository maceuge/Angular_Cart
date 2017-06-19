import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';

@Component ({
  selector: 'welcome',
  template: `<h2 class="text-center">Bienvenido a UniverMag</h2>
  <p class="text-center">Una Tienda en donde puedes conseguir todo!</p>`,
  providers: [AuthService]
})

export class WelcomeComponent implements OnInit {

  constructor (private auth: AuthService) {}

  ngOnInit (){
    this.auth.chekSession();
  }

}
