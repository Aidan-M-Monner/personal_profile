// Basics
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Resume
import { ResumeComponent } from './resume/resume.component';

// Main Page
import { HomeComponent } from './home/home.component';

// About
import { HeartComponent } from './about/heart/heart.component';
import { LeesComponent } from './about/lees/lees.component';
import { AureliosComponent } from './about/aurelios/aurelios.component';
import { AboutComponent } from './about/about.component';

// Angular
import { AngularComponent } from './angular-project/angular.component';
import { PeopleComponent } from './angular-project/people-table/people-table.component';
import { UserViewComponent } from './angular-project/people-table/user-view/user-view.component';
import { FilmComponent } from './angular-project/film-table/film-table.component';
import { FilmViewComponent } from './angular-project/film-table/film-view/film-view.component';

const routes: Routes = [
    // About Page Routes
    { path: 'about', component: AboutComponent, children: [
      { path: 'aurelios', component: AureliosComponent},
      { path: 'heart', component: HeartComponent},
      { path: 'lees', component: LeesComponent}
    ]},

    // Angular Page Routes
    { path: 'angular', component: AngularComponent, children: [
      // People Table
      { path: 'people', component: PeopleComponent},
      { path: 'people/:people_id', component: UserViewComponent},
      // Film Table
      { path: 'film', component: FilmComponent},
      { path: 'film/:film_id', component: FilmViewComponent}
    ]},
    
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent }

]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { 
  
  }