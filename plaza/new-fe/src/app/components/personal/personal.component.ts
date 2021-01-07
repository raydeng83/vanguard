import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { AppConst } from 'src/app/constants/appconst';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  serverPath = AppConst.serverPath;

  user;
  users;
  username;
  index;
  hideNavPrevious = false;
  hideNavNext = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
      this.userService.getUserByUsername(this.username).subscribe(
        res => {
          this.user = res;
          if (this.users != null) {
            if (this.index == 0) {
              this.hideNavPrevious = true;
            } else {
              this.hideNavPrevious = false;
            }
            if (this.index == this.users.length - 1) {
              this.hideNavNext = true;
            } else {
              this.hideNavNext = false;
            }
          }
        }
      )
    });
  }

  onNavToNext() {
    if (this.index < this.users.length - 1) {
      this.index++;

      this.router.navigate(['/person', this.users[this.index].username]);
    }
  }

  onNavToPrevious() {
    if (this.index > 0) {
      this.index--;

      this.router.navigate(['/person', this.users[this.index].username]);
    }
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;

        for (let i = 0; i < this.users.length; i++) {
          if (this.username == this.users[i].username) {
            this.index = i;

            break;
          }
        }
      }
    );
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit() {
    this.getAllUsers();

    this.scrollToTop();
  }

}
