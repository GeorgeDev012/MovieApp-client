import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  url = '';
  constructor(private http: HttpClient) { }

  getResults() {
    return this
            .http
            .get(this.url);
  }
}
