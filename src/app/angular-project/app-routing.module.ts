// Basics
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes for People Table
import { PeopleComponent } from './people-table/people-table.component';
import { UserViewComponent } from './people-table/user-view/user-view.component';

// Routes for Film Table
import { FilmComponent } from './film-table/film-table.component';
import { FilmViewComponent } from './film-table/film-view/film-view.component';

const routes: Routes = [
  // People Table
  { path: 'people', component: PeopleComponent},
  { path: 'people/:people_id', component: UserViewComponent},
  
  // Film Table
  { path: 'film', component: FilmComponent},
  { path: 'film/:film_id', component: FilmViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
