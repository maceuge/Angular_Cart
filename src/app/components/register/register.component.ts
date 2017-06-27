import {Component} from '@angular/core';
import {User} from '../../common/user';
import {RegisterService} from '../../services/register.services';
// import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers: [RegisterService]
})

export class RegisterComponent {

  user: User;
  error: string;

  constructor (private registService: RegisterService) {
    this.user = {
      name: null,
      email: null,
      password: null
    }
  }

  register () {
    if (this.user.name !== null) {
        if (this.user.email !== null) {
            if (this.user.password !== null) {
              this.registService.registerUserToDatabase(this.user);

              this.error = "";
            } else {
              this.error = "El Campo Contraseña no puede estar Vacio!"
            }
        } else {
          this.error = "El Campo Email no puede estar Vacio!"
        }
    } else {
      this.error = "El Campo Nombre no puede estar Vacio!"
    }
  }



}
