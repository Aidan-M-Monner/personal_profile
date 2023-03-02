import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface people {
  id: string,
  name: string,
  gender: string,
  age: number,
  eye_color: string,
  hair_color: string,
  films: Array<string>,
}

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

export class ApiService {
  peopleUrl = 'https://ghibliapi.herokuapp.com/people';
  newPeopleUrl = '';


  constructor(private http: HttpClient) { }

  GetPeople(): Observable<people[]>{
    return this.http.get<people[]>(this.peopleUrl);
  }

  GetUser(newEnd: string) {
    this.newPeopleUrl = this.peopleUrl + '/' + newEnd;
    return this.http.get<people[]>(this.newPeopleUrl);
  }

  GetFilm(filmUrl: any) {
    return this.http.get<films[]>(filmUrl);
  }
}