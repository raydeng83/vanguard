import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  username;

  constructor(private userService: UserService, private router: Router) { }

  checkAMSession() {
    this.userService.checkAMSession().subscribe(
      res => {
        if(res != null) {
          if(res['state'] == 'success') {
            this.username = res['username'];
            localStorage.setItem('amSessionUsername', this.username);
            console.log("Set username in localstorage: " + localStorage.getItem('amSessionUsername'));
          } else if (res['state'] == 'failed') {
            if(res['exception'] == 'invalidToken') {
              location.reload();
            }
          }
        }
      }
    );
  }
}
