import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SpinnerService} from '../spinner/spinner.service';

@Injectable()

export class DribbleService {

  constructor(
    private _http: Http,
    private _spinServ: SpinnerService,
  ) {}

  getDribbleJson () {
    this._spinServ.display(true);
    let url = 'https://kiteapi.herokuapp.com/dribbble/shots/1';

    return this._http.get(url)
      .map((resp: Response) => resp.json().shots)
      .finally(() => this._spinServ.display(false));
  }


}
