import { Component } from '@angular/core';
import { Result } from './models/result.model';
import { ResultService } from './services/result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
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
