import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() moviesData!: Movie;
}
