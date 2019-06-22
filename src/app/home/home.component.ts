import { Component, OnInit } from '@angular/core';

import { Result } from '../models/result.model';
import { ResultService } from '../services/result.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    results: Result[];
    
    constructor(private resultService: ResultService) { }
  
    ngOnInit() {
      this
        .resultService
        .getResults()
        .subscribe(data => {
          this.results = data.results;
        })
    }
  }