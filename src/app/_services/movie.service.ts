import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieId;

  constructor() { }

  public setMovieId(id: number): void {
    this.movieId = id;
  }

  public getMovieId(): number {
    return this.movieId;
  }
}
