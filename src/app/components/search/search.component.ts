import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchQuery: string = '';

  constructor(private _moviesService: MoviesService) {
  }

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
  }

  public updateSearch(event: Event) {
    event.preventDefault();
    this._moviesService.searchQuery = this.searchQuery;
  }
}
