import {Component, OnInit} from '@angular/core';
import {ProductListService} from './product_list.services';

@Component({
  selector: 'products-list',
  templateUrl: './product_list.component.html',
  styleUrls: ['./product_list.component.css'],
  providers: [ProductListService],
})

export class ProductListComponent implements OnInit{

  productsList = [];

  constructor(private _prodListService: ProductListService){

  }

  getProductList () {
    this._prodListService.getProductListJson()
        .subscribe((product) => this.productsList = product);
  }

  addProductToList (productname) {
    console.log(productname);
    this._prodListService.addProduct(productname);
  }

  ngOnInit () {
    this.getProductList();
    console.log(this.productsList);
  }



}
