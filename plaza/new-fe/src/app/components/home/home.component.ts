import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HelperService } from 'src/app/services/helper.service';
import {AppConst} from '../../constants/appconst';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serverPath = AppConst.serverPath;
  colors = this.shuffle(AppConst.colors);
  users;
  username;

  constructor(private userService: UserService, private router: Router, private helperService: HelperService) {
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      }
    );
  }

  onSelect(user: User) {
    this.router.navigate(['/person', user.username]);
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit(): void {
    this.getAllUsers();

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

    this.scrollToTop();
  }

  shuffle (array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
