import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()

export class MovieService {

  constructor(private _http: Http) {}

  getMovieApi() {
    let url = 'http://localhost:8000/api/moviesapi';
    return this._http.get(url)
      .map((response: Response) => response.json().data);
  }

}
