import {Component} from '@angular/core';
import {Product} from '../common/product';

import {CartService} from '../services/cart.services';

const PRODUCTS: Product[] = [
  {
    id : 1,
    name : 'Angular 2',
    type : 'Desarollo Web',
    star : 5,
    price : 2000,
    image : 'http://via.placeholder.com/250x250'
  },
  {
    id : 2,
    name : 'Python',
    type : 'Desarollo Web',
    star : 9,
    price : 5000,
    image : 'http://via.placeholder.com/250x250'
  },
  {
    id : 3,
    name : 'JavaScript',
    type : 'Desarollo Web',
    star : 7,
    price : 8999,
    image : 'http://via.placeholder.com/250x250'
  },
  {
    id : 4,
    name : 'Laravel',
    type : 'Back-End',
    star : 10,
    price : 4300,
    image : 'http://via.placeholder.com/250x250'
  },
  {
    id : 5,
    name : 'PHP 7',
    type : 'Desarollo Web',
    star : 2,
    price : 7500,
    image : 'http://via.placeholder.com/250x250'
  },
  {
    id : 6,
    name : 'React.js',
    type : 'Desarollo Web',
    star : 5,
    price : 3400,
    image : 'http://via.placeholder.com/250x250'
  }
]

@Component({
  selector: 'my-title',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService]
})

export class AppComponent {
  title: string = 'UniverMAG';
  products: Product[] = PRODUCTS;
}
