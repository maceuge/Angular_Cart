import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
import {User} from '../common/user';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {SpinnerService} from './spinner.service';

@Injectable()

export class RegisterService {

  fireListObserv: FirebaseListObservable<any[]>;

  constructor (
    private angFireBase: AngularFireDatabase,
    private _spinnerService: SpinnerService
  ) {
    this.fireListObserv = this.angFireBase.list('/users');
  }

  getUsers () {
    this._spinnerService.show();
    return this.angFireBase
      .list('/users', {preserveSnapshot: true})
      .finally(() => this._spinnerService.hide());
  }

  registerUserToDatabase (user: User) {
    this.fireListObserv.push(user);
  }


}
