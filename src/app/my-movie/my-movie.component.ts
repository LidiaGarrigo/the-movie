import { CinemaService } from './../services/cinema.service';
import MovieInterface from './../movie-interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit, OnDestroy {

  id!: any;
  movie!: MovieInterface;
  private subscribe!: Subscription;

  constructor(private route: ActivatedRoute, private cinemaService: CinemaService) {}

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie = this.cinemaService.getMovie(this.id);
    /* this.id = this.route.snapshot.paramMap.get('id'); */
    /* this.subscribe = this.cinemaService.getMovie$(this.id).subscribe(movie => this.movie = movie); */
  }
  ngOnDestroy(): void {
   /*  this.subscribe.unsubscribe(); */
  }

}
