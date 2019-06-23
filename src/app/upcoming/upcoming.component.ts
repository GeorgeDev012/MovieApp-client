import { Component, OnInit } from '@angular/core';

import { Result } from '../_models/result.model';
import { ResultService } from '../_services/result.service';

@Component({
  selector: 'app-home',
  templateUrl: 'upcoming.component.html'
})

export class UpcomingComponent implements OnInit {
  results: Result[];
  uri: string = '';
  page: number = 1;
  totalResults: number;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this
      .resultService
      .getResults(this.uri)
      .subscribe(data => {
        this.results = data.results;
        this.totalResults = data.total_results;
      })
  }

  onPageChange(event) {
    this.resultService
        .getResults(this.uri  + '&page=' + this.page)
        .subscribe(data => {
            this.results = data.results;
        });
  }
}