import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.services';

@Component ({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AuthService]
})

export class WelcomeComponent implements OnInit {

  buttonState = '';
  color: string;

  personaje = {
    nombre: "",
    edad: 38,
    raza: "Leon"
  }

  isSelected = false;

  constructor (
    private auth: AuthService,
  ) {}

  select () {
    this.isSelected = !this.isSelected;

    if (this.isSelected) {
      this.buttonState = 'SELECTED';
    } else {
      this.buttonState = 'SELECT';
    }
  }

  ngOnInit (){
    this.buttonState = 'SELECT';
    this.auth.checkSession();
  }

}
