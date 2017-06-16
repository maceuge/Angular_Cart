import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.services';

@Component({
    selector: 'cart',
    template:
  ` <div class="row">
        <div class="col-md-4">
           <h2>Carrito</h2>
           <p>Cantidad: <span class="badge">{{details.items}}</span></p>
           <p>Total: <span class="badge">{{details.total | currency: 'USD' : true : '1.2-2' }}</span></p>
        </div>
        <div class="col-md-4">
            <ul class="list-group">
              <li class="list-group-item" *ngFor="let key of keys()">
                Curso: {{products[key].name}} / 
                Precio: {{products[key].price}} /
                Cantidad: <span class="badge">{{products[key].quantity}}</span>
              </li>
            </ul>
        </div>  
    </div>`
})

export class CartComponent implements OnInit {

  products: any;
  details: any;

  constructor(private CartService: CartService) {}

  ngOnInit () {
    this.products = this.CartService.getProducts();
    this.details = this.CartService.getDetail();
  }

  keys() {
    return Object.keys(this.products);
  }


}
