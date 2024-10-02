import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient){}

  getAllUsers(): Observable<User[]>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(url);
  }

}

