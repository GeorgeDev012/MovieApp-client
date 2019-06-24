import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieId;

  constructor(private http: HttpClient) { }

  public setUri(uri: number): void {
    this.movieId = uri;
  }

  public getMovieId(): number {
    return this.movieId;
  }
}
