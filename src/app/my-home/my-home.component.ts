import { CinemaService } from './../services/cinema.service';
import MovieInterface from './../movie-interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {
  suscription: Subscription[];
 /*  movies!: MovieInterface[]; */
  movies = this.cinemaService.getMovies();


  constructor(private cinemaService: CinemaService) {
    this.suscription = [];
  }

  ngOnInit(): void {
/*     this.cinemaService.getMovies$().subscribe((datos) => {
      this.movies = datos;
    }); */
  }

}
