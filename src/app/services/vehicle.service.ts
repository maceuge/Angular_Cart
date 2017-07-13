import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

export class Vehicle {
  constructor (
    public id: number,
    public name: string,
    public type: string
  ) {}
}

@Injectable()

export class VehicleService {

  constructor (private _http: Http){}

  getVehiclesJson () {
    let vehicle = this._http.get('/assets/api/vehicle.json');
    return vehicle.map((response: Response) => <Vehicle[]>response.json().data);
  }

}
