import { Component } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../api-services/api.film.services';
import { Router } from '@angular/router';
import { films } from '../../api-services/api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss']
})

export class FilmViewComponent {
  id: any;
  film_data: any;
  state: string = '';
  data: films[] = [];

  constructor(private route: ActivatedRoute, private api: FilmService, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('film_id')
      //execute code here to get the user information
      this.state = 'submitted';
      this.api.GetFilm(this.id).subscribe({
        next: (x) => {
          this.film_data = x;
          this.state = 'success';
          console.log(this.film_data);
        },
        error: ( error ) => {
          this.state = 'failed';
        }
      });
    })
  }
}
