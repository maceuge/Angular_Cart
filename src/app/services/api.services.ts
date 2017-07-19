import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()

export class ApiService {

  constructor(private http: Http) {}

  getProducts () {
     let url = '/assets/data/data.json';
     return this.http.get(url)
       .toPromise()
       .then(response => response.json())
       .catch(this.error);
  }

  getProductsObserv() {
    let urlData = '/assets/data/data.json';
    return this.http.get(urlData)
      .map((response: Response) => response.json());
  }

  getProduct (id: number) {
    return this.getProducts()
      .then(products => products.find(product => product.id == id));
  }

  error(error: any) {
      return Promise.reject(error.message || error);
  }

}
