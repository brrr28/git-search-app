import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../components/blocks/blocks.component';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  userData: any;
  error!: string;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`https://api.github.com/users?per_page=20`)
  }

  getUser(search: string): Observable<IUser> {
    return this.http.get<IUser>(`https://api.github.com/users/${search}`)
  }

}
