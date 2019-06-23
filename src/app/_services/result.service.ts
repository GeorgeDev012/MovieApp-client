import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  
  constructor(private http: HttpClient) { }

  getResults(url) {
    return this
            .http
            .get(url);
  }
}
