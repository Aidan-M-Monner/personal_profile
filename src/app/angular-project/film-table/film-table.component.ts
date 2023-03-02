import { Component } from '@angular/core';
import { FilmService } from '../api-services/api.film.services';
import { films } from '../api-services/api.film.services';

@Component({
  selector: 'app-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.scss']
})
export class FilmComponent {

  film_data: films[] = [];
  state: string = '';
  columnsToDisplay = ['title', 'director', 'producer', 'release_date', 'rt_score', 'id'];

  constructor(private api: FilmService) {
    
  }

  ngOnInit(): void {
    this.state = 'submitted';
    this.api.GetFilms().subscribe({
      next: (x) => {
        this.film_data = x;
        this.state = 'success';
        console.log(this.film_data);
      },
      error: ( error ) => {
        this.state = 'failed';
      }
    });
  }
}
