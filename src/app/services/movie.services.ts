import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {LoaderService} from '../components/spinner2/spinner2.service';

export interface Movie {
  id: number,
  title: string,
  rating: number,
  release_date: Date,
  has_awards: number,
  genre: number
}

@Injectable()

export class MovieService {

  private url = 'http://localhost:8000/api/moviesapi';

  constructor(
    private _http: Http,
    private _spinService: LoaderService
  ) {}

  getMovieApi() {
    this._spinService.display(true);
    return this._http.get(this.url)
      .map((response: Response) => response.json())
      .finally(() => this._spinService.display(false));
  }


  getMovieByTitle(title) {
    let param = new URLSearchParams();
        param.set('title', title);
        console.log('service: '+ title);
    return this._http.get(this.url, {search: param})
      .map(resp => resp.json());
  }

  addMovie(movie: Movie[]) {
    let url = 'http://localhost:8000/api/moviesapi';
    return this._http.post(url, JSON.stringify(movie));
  }

}
