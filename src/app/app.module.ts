import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ResumeComponent } from './resume/resume.component';



import { NextDirective } from './resume/next.directive';
import { PrevDirective } from './resume/prev.directive';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from './home/carousel/carousel.module';


@NgModule({
  declarations: [
    AppComponent,
    NextDirective,
    PrevDirective,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
