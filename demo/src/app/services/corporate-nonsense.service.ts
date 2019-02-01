import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phrase } from '../models/phrase.model';

@Injectable({
  providedIn: 'root'
})
export class CorporateNonsenseService {
  constructor(private http: HttpClient) { }

  public getCorporateNonsense() {
    return this.http.get<Phrase>('http://localhost:3000/');
  }
}

