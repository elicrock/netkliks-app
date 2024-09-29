import { Component } from '@angular/core';
import { Movie } from '../../models/movies.model';
import { MOVIES } from '../../constants/movies.constants';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {

  constructor(
    private _moviesService: MoviesService
  ) { }

  public get movies(): Movie[] {
    return this._moviesService.getFilteredMovies();
  }
}
