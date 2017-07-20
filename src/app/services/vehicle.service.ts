import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {LoaderService} from '../components/spinner2/spinner2.service';
import 'rxjs/add/operator/timeout'

export class Vehicle {
  constructor (
    public id: number,
    public name: string,
    public type: string
  ) {}
}

@Injectable()

export class VehicleService {

  constructor (
    private _http: Http,
    private _spinServ: LoaderService
  ){}

  getVehiclesJson () {
    this._spinServ.display(true);
    let vehicle = this._http.get('/assets/api/vehicle.json');
    return vehicle
      .timeout(5500)
      .map((response: Response) => <Vehicle[]>response.json().data)
      .finally(() => this._spinServ.display(false));
  }

}
