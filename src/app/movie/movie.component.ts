import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../_models/movie.model';
import { Poster, Images } from '../_models/images.model';
import { Credits } from '../_models/credits.model';
import { ApiKeyService } from '../_services/apikey.service';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html'
})

export class MovieComponent implements OnInit {
  movie: Movie;
  images: Images;
  people: Credits;
  movieUri: string = 'https://api.themoviedb.org/3/movie/';
  movieNumber: number;
  page: number = 1;


  constructor(private requestService: RequestService, private route: ActivatedRoute, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieNumber = params["id"];
    });

    this.requestService
        .getData(this.movieUri  + this.movieNumber + this.apiKeyService.getApiKey())
        .subscribe(data => {
            this.movie = data as Movie;
        });
    this.requestService
        .getData(this.movieUri + this.movieNumber + '/images' + this.apiKeyService.getApiKey())
        .subscribe(data => {
            this.images = data as Images;
        });
    this.requestService
        .getData(this.movieUri + this.movieNumber + '/credits' + this.apiKeyService.getApiKey())
        .subscribe(data => {
            this.people = data as Credits;
        });
    
  }

  public isDirector(job: string): Boolean {
    return job === 'Director';
  }

}