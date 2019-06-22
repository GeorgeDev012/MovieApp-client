import { Component, OnInit } from '@angular/core';

import { Result } from '../models/result.model';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-home',
  templateUrl: 'people.component.html'
})

export class PeopleComponent implements OnInit {
  results: Result[];
  uri: string;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this
      .resultService
      .getResults(this.uri)
      .subscribe(data => {
        this.results = data.results;
        console.log(this.results);
      })
  }
}