import { MovieInterface } from './../movie-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getMovies$(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]>(environment.url);
  }

  getMovie$(id: string): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(`${environment.url}${id}`);
  }
}
