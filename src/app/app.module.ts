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
    AureliosComponent
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
