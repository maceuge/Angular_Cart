import {Component} from '@angular/core';
import {User} from './user';
import {AuthService} from './auth.services';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class AuthComponent {

  user: User;
  error: string;

  constructor (private auth: AuthService) {
    this.user = {name: null, email: null, password: null}
  }

  login () {
    if (!this.auth.login(this.user)) {
      this.error = "La Contraseña es incorrecta";
    }
  }

}
