import { Component } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api-services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})

export class UserViewComponent {
  id: any;
  data: any;
  film: any;
  state: string = '';

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('people_id')
      //execute code here to get the user information
      this.state = 'submitted';
      this.api.GetUser(this.id).subscribe({
        next: (x) => {
          this.data = x;
          this.state = 'success';
          console.log(this.data);

          this.api.GetFilm(this.data.films[0]).subscribe({
            next: (y) => {
              this.film = y;
              this.state = 'success';
              console.log(this.data);
            },
            error: ( error ) => {
              this.state = 'failed';
            }
          });
        },
        error: ( error ) => {
          this.state = 'failed';
        }
      });
    })
  }
}
