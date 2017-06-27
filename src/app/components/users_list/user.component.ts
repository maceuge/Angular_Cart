import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';
import {RegisterService} from '../../services/register.services';

@Component({
  selector: 'user-list',
  templateUrl: './user.component.html',
  providers: [AuthService, RegisterService]
})

export class UserListComponent implements OnInit{

  private users: any [];

  constructor (
    private authServ: AuthService,
    private registerServ: RegisterService
  ) {}

  getUserObject(){
    let usersList = this.registerServ.getUsers();

      usersList.forEach(function (value) {
        // this.users = value;
        // for (var key in value) {
        //   this.users[key].push(value);
        //   // console.log("Valor: " + value[key] + " y la llave: " + key);
        // }
        console.log(value);
      });
  }

  keys() {
    return Object.keys(this.registerServ.getUsers());
  }

  ngOnInit () {
    this.authServ.checkSession();
    this.getUserObject();
    // console.log(this.keys());
  }

}
