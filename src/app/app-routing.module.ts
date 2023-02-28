// Basics
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { HeartComponent } from './about/heart/heart.component';
import { LeesComponent } from './about/lees/lees.component';
import { AureliosComponent } from './about/aurelios/aurelios.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent, children: [
      // About Page Routes
      { path: 'aurelios', component: AureliosComponent},
      { path: 'heart', component: HeartComponent},
      { path: 'lees', component: LeesComponent}
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