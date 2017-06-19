import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../../common/product';
import {ApiService} from '../../services/api.services';
import {CartService} from '../../services/cart.services';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  providers: [ApiService, CartService]
})

export class DetailComponent implements OnInit{

  product : Product

  constructor (
    private route : ActivatedRoute,
    private locate : Location,
    private apiservice : ApiService,
    private cartService: CartService
  ) {

  }

  addToCartInDetail () {
    return this.cartService.addToCart(this.product);
  }

  ngOnInit () {

    this.route.params.forEach( (params: Params) => {
        let id = +params["id"];
        this.apiservice.getProduct(id)
          .then(product => this.product = product);
    })

  }

}
