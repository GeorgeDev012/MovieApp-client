import { Component, OnInit } from '@angular/core';

import { Result, Statistics } from '../_models/result.model';
import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { HttpClient } from '@angular/common/http';
import { CSRFManagerService } from '../_services/csrf-manager.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  statistics: Statistics;
  uri: string = 'https://api.themoviedb.org/3/movie/top_rated';
  page: number = 1;
  totalResults: number;


  constructor(private requestService: RequestService, private route: ActivatedRoute, 
    private apiKeyService: ApiService, private http: HttpClient, 
    private csrfManagerService: CSRFManagerService, private cookieService: CookieService) { }

  ngOnInit() {
    this
      .requestService
      .getData(this.uri + this.apiKeyService.getApiKey())
      .subscribe(data => {
        this.statistics = data as Statistics;
        this.totalResults = this.statistics.total_results;
      });
    
      this.http.get(
        'http://127.0.0.1:8000/home/',
        {
          observe: 'response'
        }
      ).subscribe(
        response => {
          if (!this.csrfManagerService.getToken()) {
            this.csrfManagerService.setToken(this.cookieService.get('csrftoken'));
          }
        },
        errors => {
          console.log(errors);
        }
  )
  
  }

  onPageChange() {
    this.requestService
        .getData(this.uri + this.apiKeyService.getApiKey() + '&page=' + this.page)
        .subscribe(data => {
            this.statistics = data as Statistics;
        });
  }

  
}