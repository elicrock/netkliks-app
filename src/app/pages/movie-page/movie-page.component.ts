import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movies.model';
import { MOVIES } from '../../constants/movies.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent implements OnInit {
  public movies: Movie[] = [];
  public movie!: Movie;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _moviesService: MoviesService
  ) {

  }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));

    this.movies = this._moviesService.getFullMovies();

    this._initMovie(id);
  }

  private _initMovie(id: number) {
    const findMovie = this.movies.find(movie => movie.id === id);

    if (findMovie) {
      this.movie = findMovie;
    } else {
      this._router.navigate(['/']);
    }
  }
}
