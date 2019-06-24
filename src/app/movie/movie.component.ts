import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'movie.component.html'
})

export class MovieComponent implements OnInit {
  movie: any;
  images: any[];
  movieUri: string = 'https://api.themoviedb.org/3/movie/';
  imagesUri: string = 'https://api.themoviedb.org/3/movie/'
  movieNumber: number;
  apiKey: string = '';
  page: number = 1;
  totalResults: number;


  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieNumber = params["id"];
    });

    this.requestService
        .getData(this.movieUri  + this.movieNumber + this.apiKey)
        .subscribe(data => {
            this.movie = data;
        });
    this.requestService
        .getData(this.movieUri + this.movieNumber + '/images' + this.apiKey)
        .subscribe(data => {
            this.images = data.posters;
        });
  }

}