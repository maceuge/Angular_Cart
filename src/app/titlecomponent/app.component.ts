import {Component, OnInit} from '@angular/core';
import {Product} from '../common/product';
import {ApiService} from '../services/api.services';
import {CartService} from '../services/cart.services';

@Component({
  selector: 'my-title',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService, ApiService]
})

export class AppComponent implements OnInit{
  title: string = 'UniverMAG';
  products: Product[];

  constructor (private apiService : ApiService) {}

  // getProducts () {
  //   this.apiService.getProducts().then(
  //     (products) => {
  //       this.products = products
  //     }
  //   )
  // }
  //
  ngOnInit () {
    // this.getProducts()
    this.apiService.getProducts()
  }


}
