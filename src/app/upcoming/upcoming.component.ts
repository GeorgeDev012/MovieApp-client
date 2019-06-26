import { Component, OnInit } from '@angular/core';

import { Result, Statistics } from '../_models/result.model';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: 'upcoming.component.html'
})

export class UpcomingComponent implements OnInit {
  statistics: Statistics;
  uri: string = '';
  page: number = 1;
  totalResults: number;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this
      .requestService
      .getData(this.uri)
      .subscribe(data => {
        this.statistics = data as Statistics;
        this.totalResults = this.statistics.total_results
      })
  }

  onPageChange(event) {
    this.requestService
        .getData(this.uri  + '&page=' + this.page)
        .subscribe(data => {
            this.statistics = data as Statistics;
        });
  }
}