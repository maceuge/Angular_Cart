import {NgModule} from '@angular/core';
import {ProductListComponent} from './product_list.component';
import {ProductListService} from './product_list.services';

@NgModule ({
  declarations: [ProductListComponent],
  providers: [ProductListService],

})

export class ProductListModule {

}
