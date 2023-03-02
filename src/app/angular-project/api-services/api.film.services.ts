import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface films {
  id: string,
  title: string,
  image: string,
  movie_banner: string,
  description: string,
  director: string,
  producer: string,
  release_date: string,
  running_time: string,
  rt_score: string
}

@Injectable({
  providedIn: 'root'
})

export class FilmService {
    filmsUrl = 'https://ghibliapi.herokuapp.com/films';
    newFilmsUrl = '';
  
  
    constructor(private http: HttpClient) { }
  
    GetFilms(): Observable<films[]>{
      return this.http.get<films[]>(this.filmsUrl);
    }
  
    GetFilm(newEnd: string) {
      this.newFilmsUrl = this.filmsUrl + '/' + newEnd;
      return this.http.get<films[]>(this.newFilmsUrl);
    }
  }