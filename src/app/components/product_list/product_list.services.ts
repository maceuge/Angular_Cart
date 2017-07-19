import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http'


interface Product {
  id: string,
  title: string,
  description: string,
  price: number,
  quantity: number,
  category: Category[],
  detail: Detail[]
}

interface Category {
  id: string,
  name: string
}

interface Detail {
  id: string,
  weight: number,
  rating: number,
  mark: string,
  model: string
}

@Injectable()

export class ProductListService {

  private linkApi = 'https://producs.restlet.net/v2';

  constructor(
    private _http: Http
  ) {}


  getProductListJson () {
    let url = this.linkApi + '/products/';
    return this._http.get(url).map((resp: Response) => <Product[]>resp.json());
  }

  getProductTitle (title: string) {
    let param = new URLSearchParams();
        param.set('title', title);
    return this._http.get(this.linkApi+'/products/', {search: param})
      .map(res => res.json());
  }

  addProduct (product: Product) {
    let header = new Headers();
        header.append('Content-Type', 'application/json');
        console.log('ProdServ: '+ product);
    return this._http.post(this.linkApi+'/products/', JSON.stringify(product), {headers: header});
  }

}
