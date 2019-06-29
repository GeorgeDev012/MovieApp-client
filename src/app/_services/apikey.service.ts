import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  private apiKey: string = '';

  constructor() { }

  public getApiKey(): string {
    return this.apiKey;
  }
}