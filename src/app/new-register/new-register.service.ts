import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/operator/map'

@Injectable()

export class NewRegisterService {

  constructor (
    private http: Http
  ) {  }

  registerToDb (user: any[]) {
    return this.http.put('https://univermag-5dd49.firebaseio.com/user.json', user);
  }

}
