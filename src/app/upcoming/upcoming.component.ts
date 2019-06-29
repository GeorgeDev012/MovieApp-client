import { Component, OnInit } from '@angular/core';

import { Result, Statistics } from '../_models/result.model';
import { RequestService } from '../_services/request.service';
import { ApiKeyService } from '../_services/apikey.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: 'upcoming.component.html'
})

export class UpcomingComponent implements OnInit {
  statistics: Statistics;
  uri: string = 'https://api.themoviedb.org/3/movie/upcoming';
  page: number = 1;
  totalResults: number;

  constructor(private requestService: RequestService, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this
      .requestService
      .getData(this.uri + this.apiKeyService.getApiKey())
      .subscribe(data => {
        this.statistics = data as Statistics;
        this.totalResults = this.statistics.total_results
      })
  }

  onPageChange(event) {
    this.requestService
        .getData(this.uri + this.apiKeyService.getApiKey() + '&page=' + this.page)
        .subscribe(data => {
            this.statistics = data as Statistics;
        });
  }
}