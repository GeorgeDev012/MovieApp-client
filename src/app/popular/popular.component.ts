import { Component, OnInit } from '@angular/core';

import { Result, Statistics } from '../_models/result.model';
import { RequestService } from '../_services/request.service';
import { ApiService } from '../_services/api.service';

@Component({
    selector: 'app-popular',
    templateUrl: 'popular.component.html'
})

export class PopularComponent implements OnInit {
    statistics: Statistics;
    uri: string = 'https://api.themoviedb.org/3/movie/popular';
    totalResults: number;
    page: number = 1;

    constructor(private requestService: RequestService, private apiKeyService: ApiService) { }
  
    ngOnInit() {
      this
        .requestService
        .getData(this.uri + this.apiKeyService.getApiKey())
        .subscribe(data => {
          this.statistics = data as Statistics;
          this.totalResults = this.statistics.total_results;
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