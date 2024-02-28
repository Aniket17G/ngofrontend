import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl='http://localhost:8080'
  constructor(private http:HttpClient) {}
    createUser(user:Object):Observable<Object>{
      return this.http.post(`${this.baseUrl}/users`,user)
    }
}

