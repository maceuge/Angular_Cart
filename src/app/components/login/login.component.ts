import {Component} from '@angular/core';
import {AuthService, User} from '../../services/auth.services';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  providers: [AuthService]
})

export class AuthComponent {

  user: User;
  error: string;

  constructor (private auth: AuthService) {
    this.user = {email: null, password: null}
  }

  sessionStatus () {
    return this.auth.getSession();
  }

  login () {
    if (!this.auth.login(this.user)) {
      this.error = "La Contraseña es incorrecta";
    }
  }

}
