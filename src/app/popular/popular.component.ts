import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../models/result.model';
import { ResultService } from '../services/result.service';

@Component({
    selector: 'app-popular',
    templateUrl: 'popular.component.html'
})

export class PopularComponent implements OnInit {
    results: Result[];
    uri: string;

    constructor(private resultService: ResultService) { }
  
    ngOnInit() {
      this
        .resultService
        .getResults(this.uri)
        .subscribe(data => {
          this.results = data.results;
        })
    }

  }