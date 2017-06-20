import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';

@Component ({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  providers: [AuthService]
})

export class WelcomeComponent implements OnInit {

  constructor (private auth: AuthService) {}

  // getUser (){
  //   let user = JSON.parse(this.auth.getUser());
  //   return user;
  // }

  ngOnInit (){
    this.auth.checkSession();
  }

}
