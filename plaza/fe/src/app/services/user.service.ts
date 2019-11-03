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
    const url = this.serverPath + '/api/user/all';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.get(url);
  }

  getUserByUsername(username) {
    const url = this.serverPath + '/api/user/getUserByUsername';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(url, username, httpOptions);
  }

  save(user) {
    const url = this.serverPath + '/api/user/save';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(url, JSON.stringify(user), httpOptions);
  }

  checkAMSession() {
    const url = this.serverPath + '/api/user/checkAMSession';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.get(url, httpOptions);
  }
}

// http://openam.example.com:18080/openam/identity/json/attributes?subjectid=_klDlVR2iK47cIEFDIezonJi_6E.*AAJTSQACMDEAAlNLABw4V0JHTHhQck1zcTA1Q0NpdllnMXVBeHNkdFE9AAR0eXBlAANDVFMAAlMxAAA.*