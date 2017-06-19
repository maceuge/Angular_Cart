import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../common/product';
import "rxjs/add/operator/toPromise";


@Injectable()

export class ApiService {

  constructor(private http : Http) {}

  getProducts () {
     let url = '/assets/data/data.json';
     return this.http.get(url)
       .toPromise()
       .then(response => response.json())
       .catch(this.error);
  }

  getProduct (id: number) {
    return this.getProducts()
      .then(products => products.find(product => product.id == id));
  }

  error(error : any) {
      return Promise.reject(error.message || error);
  }

}
