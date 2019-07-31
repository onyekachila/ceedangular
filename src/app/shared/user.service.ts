import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:57252';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: one-line
  registerUser(user: User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    };
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

}
