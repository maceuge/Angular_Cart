import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../common/product';
import "rxjs/add/operator/toPromise";


@Injectable()

export class ApiService {

  constructor(private http : Http) {}

  getProducts () {
     let url = '/data/data.json';
     return console.log(url)
       // .toPromise()
       // .then(response => response.json())
       // .catch(this.error);
  }

  // error(error : any) {
  //     return Promise.reject(error.message || error);
  // }

}
