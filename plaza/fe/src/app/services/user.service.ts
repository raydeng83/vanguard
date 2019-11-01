import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConst} from '../constants/appconst';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverPath: string = AppConst.serverPath;

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    const url = this.serverPath + '/user/all';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.get(url);
  }

  // create(user) {
  //   const url = this.serverPath + '/user/create';
  //   const httpOptions = {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   };

  //   return this.http.post(url, JSON.stringify(user), httpOptions);
  // }
}
