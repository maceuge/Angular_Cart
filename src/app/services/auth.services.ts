import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../common/user';


const USERS = [
  {
    name: "Eugenio",
    email: "admin@univer.com",
    password: "123456"
  },
  {
    name: "Yamila",
    email: "user@univer.com",
    password: "123456"
  }
]

@Injectable()

export class AuthService {
   users: User [] = USERS;

  constructor (private router: Router) {}

  login (user: User) {
    let user_exist = this.users.find(u => u.email == user.email);

    if (user_exist && user_exist.password == user.password) {
        localStorage.setItem("user", JSON.stringify(user_exist));
        let link = ['/'];
        this.router.navigate(link);
    }
  }

  logout () {
    localStorage.removeItem("user");
    this.redirect();
  }

  redirect () {
    let link = ['/login'];
    this.router.navigate(link);
  }

  checkSession () {
    if (localStorage.getItem("user") == null) {
       this.redirect();
    }
  }

  check () {
    if (localStorage.getItem("user") == null) {
      return false;
    } else {
      return true;
    }
  }

  getUser () {
    return localStorage.getItem("user");
  }

}
