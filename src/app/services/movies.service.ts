import { Injectable } from '@angular/core';
import { Movie } from '../models/movies.model';
import { MOVIES } from '../constants/movies.constants';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _movies: Movie[] = MOVIES;
  private _searchQuery: string = '';

  constructor() { }

  public getFullMovies(): Movie[] {
    return this._movies;
  }

  public getFilteredMovies(): Movie[] {
    return this._movies.filter(movie => movie.title.toLowerCase().includes(this._searchQuery.toLowerCase()));
  }

  public get searchQuery(): string {
    return this._searchQuery;
  }

  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
}
