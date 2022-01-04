import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users?per_page=20`)
  }

  getUser(search: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/users?q=${search}&per_page=20`)
  }

}
