import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ResumeComponent } from './resume/resume.component';
import { NextDirective } from './resume/next.directive';
import { PrevDirective } from './resume/prev.directive';

import { HomeComponent } from './home/home.component';
import { CarouselModule } from './home/carousel/carousel.module';

import { AboutComponent } from './about/about.component';
import { ClickOutsideDirective } from './about/clickOutside.directive';
import { HeartComponent } from './about/heart/heart.component';
import { LeesComponent } from './about/lees/lees.component';
import { AureliosComponent } from './about/aurelios/aurelios.component';

import { AngularComponent } from './angular-project/angular.component';
import { PeopleComponent } from './angular-project/people-table/people-table.component';
import { FilmComponent } from './angular-project/film-table/film-table.component';
import { UserViewComponent } from './angular-project/people-table/user-view/user-view.component';
import { FilmViewComponent } from './angular-project/film-table/film-view/film-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NextDirective,
    PrevDirective,
    ResumeComponent,
    HomeComponent,
    AboutComponent,
    ClickOutsideDirective,
    HeartComponent,
    LeesComponent,
    AureliosComponent,
    AngularComponent,
    PeopleComponent,
    FilmComponent,
    UserViewComponent,
    FilmViewComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
