import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'

@Injectable()

export class ProductListService {

  constructor(
    private _http: Http
  ) {}


  getProductListJson () {
    let url = 'https://producs.restlet.net/v2/products/';
    return this._http.get(url).map((resp: Response) => resp.json());
  }

}
