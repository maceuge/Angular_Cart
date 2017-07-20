import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
import {User} from '../common/user';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {SpinnerService} from './spinner.service';
import {LoaderService} from '../components/spinner2/spinner2.service';

@Injectable()

export class RegisterService {

  fireListObserv: FirebaseListObservable<any[]>;

  constructor (
    private angFireBase: AngularFireDatabase,
    private _spinnerService: SpinnerService,
    private _spinServ: LoaderService,
  ) {
    this.fireListObserv = this.angFireBase.list('/users');
  }

  getUsers () {
    this._spinServ.display(true);
    return this.angFireBase
      .list('/users', {preserveSnapshot: true})
      .finally(() => this._spinServ.display(false));
  }

  registerUserToDatabase (user: User) {
    this.fireListObserv.push(user);
  }


}
