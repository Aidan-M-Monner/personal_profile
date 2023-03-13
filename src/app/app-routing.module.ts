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

const routes: Routes = [

    // Default Home Page
    { path: '', component: HomeComponent},
    
    // About Page Routes
    { path: 'about', component: AboutComponent, children: [
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