import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/registration/user';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  login(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/login/user', data);
  }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
