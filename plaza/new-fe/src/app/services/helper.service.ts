import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  username;

  constructor(private userService: UserService, private router: Router) { }

  checkAMSession () {
    this.userService.checkAMSession().subscribe(
      res => {
        const response: any = res;
        if (res != null) {
          if (response.state === 'success') {
            this.username = response.username;
            localStorage.setItem('amSessionUsername', this.username);
            console.log('Set username in localstorage: ' + localStorage.getItem('amSessionUsername'));
          } else if (response.state === 'failed') {
            if (response.exception === 'invalidToken') {
              location.reload();
            }
          }
        }
      }
    );
  }
}
