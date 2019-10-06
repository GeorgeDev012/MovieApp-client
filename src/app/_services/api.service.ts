import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey: string = '';
  private apiUrl: string = '127.0.0.1:8000/';

  constructor() { }

  public getApiKey(): string {
    return this.apiKey;
  }

  public getAPIUrl(): string {
    return this.apiUrl;
  }
}