import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  getArukeszlet() {
    return this.http.get('http://prf-2022-example.herokuapp.com/arukereso');
  }
}
