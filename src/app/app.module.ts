import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NextDirective } from './about/next.directive';
import { PrevDirective } from './about/prev.directive';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NextDirective,
    PrevDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
