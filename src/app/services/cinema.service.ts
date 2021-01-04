import MovieInterface from './../movie-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as data from '../db/movies.json';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public pelis;

  constructor(/* private http: HttpClient */) { 
    this.pelis = JSON.parse(JSON.stringify(data.movies));
  }

  getMovies()/* : Observable<MovieInterface[]>  */{
    /* return this.http.get<MovieInterface[]>(environment.url); */
    return this.pelis;
  }

  getMovie(_id: any)/* : Observable<MovieInterface> */ {
    /* return this.http.get<MovieInterface>(`${environment.url}${id}`); */
    let numid = parseInt(_id);
    return this.pelis.filter((peli: { id: number; }) => peli.id === numid)[0];
  }
}
