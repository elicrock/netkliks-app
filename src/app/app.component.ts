import { Component } from '@angular/core';
import { Movie } from './models/movies.model';
import { MOVIES } from './constants/movies.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: Movie[] = MOVIES;
}
