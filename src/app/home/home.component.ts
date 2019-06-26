import { Component, OnInit } from '@angular/core';

import { Result, Statistics } from '../_models/result.model';
import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  statistics: Statistics;
  uri: string = '';
  page: number = 1;
  totalResults: number;


  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this
      .requestService
      .getData(this.uri)
      .subscribe(data => {
        this.statistics = data as Statistics;
        this.totalResults = this.statistics.total_results;
      })
  }

  onPageChange() {
    this.requestService
        .getData(this.uri  + '&page=' + this.page)
        .subscribe(data => {
            this.statistics = data as Statistics;
        });
  }

  
}