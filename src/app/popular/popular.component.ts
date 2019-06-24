import { Component, OnInit } from '@angular/core';

import { Result } from '../_models/result.model';
import { RequestService } from '../_services/request.service';

@Component({
    selector: 'app-popular',
    templateUrl: 'popular.component.html'
})

export class PopularComponent implements OnInit {
    results: Result[];
    uri: string = '';
    totalResults: number;
    page: number = 1;

    constructor(private requestService: RequestService) { }
  
    ngOnInit() {
      this
        .requestService
        .getData(this.uri)
        .subscribe(data => {
          this.results = data.results;
          this.totalResults = data.total_results;
        })
    }

    onPageChange(event) {
      this.requestService
          .getData(this.uri  + '&page=' + this.page)
          .subscribe(data => {
              this.results = data.results;
          });
    }

  }