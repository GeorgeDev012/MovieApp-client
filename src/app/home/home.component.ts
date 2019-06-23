import { Component, OnInit } from '@angular/core';

import { Result } from '../_models/result.model';
import { ResultService } from '../_services/result.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  results: Result[];
  uri: string = '';

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