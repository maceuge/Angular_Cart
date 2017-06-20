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
   // session: boolean = false;

  constructor (private router: Router) {}

  login (user: User) {
    let user_exist = this.users.find(u => u.email == user.email);

    if (user_exist && user_exist.password == user.password) {
        localStorage.setItem("user", JSON.stringify(user_exist));
        // this.session = true;
        let link = ['/'];
        this.router.navigate(link);
    }
  }

  logout () {
    // this.session = false;
    localStorage.removeItem("user");
    this.redirect();
  }

  redirect () {
    let link = ['/login'];
    this.router.navigate(link);
  }

  checkSession () {
    if (localStorage.getItem("user") == null) {
       // this.session = false;
       this.redirect();
    } else {
       // this.session = true;
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
