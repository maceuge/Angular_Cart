import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
import {User} from '../login/user';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {SpinnerService} from '../spinner/spinner.service';

@Injectable()

export class RegisterService {

  fireListObserv: FirebaseListObservable<any[]>;

  constructor (
    private angFireBase: AngularFireDatabase,
    private _spinServ: SpinnerService,
  ) {
    this.fireListObserv = this.angFireBase.list('/users');
  }

  getUsers () {
    this._spinServ.display(true);
    return this.angFireBase
      .list('/users', {preserveSnapshot: true})
      .do(() => this._spinServ.display(false));
  }

  registerUserToDatabase (user: User) {
    this.fireListObserv.push(user);
  }


}
