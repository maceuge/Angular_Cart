import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.services';
import {RegisterService} from '../register/register.services';

@Component({
  selector: 'user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AuthService, RegisterService]
})

export class UserListComponent implements OnInit{

  users = [];

  constructor (
    private authServ: AuthService,
    private registerServ: RegisterService,
  ) {}


  keys() {
    return Object.keys(this.users);
  }

  getUsersList () {
    let usersList = this.registerServ.getUsers();

    usersList
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          // console.log(snapshot.key, snapshot.val().name);
          this.users.push(snapshot.val());
        });
      })
  }


  ngOnInit () {
    this.authServ.checkSession();
    this.getUsersList();
  }

}
