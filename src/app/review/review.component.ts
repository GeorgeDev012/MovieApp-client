import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: 'review.component.html'
})

export class ReviewComponent {
    movieId: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
          this.movieId = params["id"];
        });
    }

    addReview(content: string): void {
        //this.movieId = this.movieService.getMovieId();
        console.log(content + ' ' + this.movieId);
    }
}