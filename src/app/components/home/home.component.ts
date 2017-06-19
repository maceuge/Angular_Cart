import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';

@Component({
  selector: 'init-page',
  templateUrl: './home.component.html',
  providers: [AuthService]
})

export class HomeComponent implements OnInit{
  title: string = "Univer-MAG";

  constructor (private auth: AuthService) {}

  ngOnInit () {}

  sessionStatus () {
    return this.auth.getSession();
  }

  logout () {
    this.auth.logout();
  }
}
