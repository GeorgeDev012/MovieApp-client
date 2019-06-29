import { Component, OnInit } from '@angular/core';

import { Result, Statistics } from '../_models/result.model';
import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { ApiKeyService } from '../_services/apikey.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  statistics: Statistics;
  uri: string = 'https://api.themoviedb.org/3/movie/top_rated';
  page: number = 1;
  totalResults: number;


  constructor(private requestService: RequestService, private route: ActivatedRoute, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this
      .requestService
      .getData(this.uri + this.apiKeyService.getApiKey())
      .subscribe(data => {
        this.statistics = data as Statistics;
        this.totalResults = this.statistics.total_results;
      })
  }

  onPageChange() {
    this.requestService
        .getData(this.uri + this.apiKeyService.getApiKey() + '&page=' + this.page)
        .subscribe(data => {
            this.statistics = data as Statistics;
        });
  }

  
}