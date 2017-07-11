import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.services';

@Component ({
  selector: 'movie-list',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService],
})

export class MovieComponent implements OnInit{

  movies = [];

  constructor(private _movieServ: MovieService) {}

  getMovies () {
    this._movieServ.getMovieApi()
      .subscribe(movies => this.movies = movies);
  }

  ngOnInit () {
    this.getMovies();
  }

}