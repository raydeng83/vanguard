import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new User();

  badInfo = false;
  submitted = false;

  constructor(private userService: UserService) {
    // init user
    this.user.username = localStorage.getItem('amSessionUsername');
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.phone = '';
    this.user.email = '';
    this.user.description = '';
    this.user.subtitle = '';
    this.user.imageName = '';
  }

  onSubmit() {
    if (this.user.firstName == null || this.user.firstName == '' ||
      this.user.lastName == null || this.user.lastName == '' ||
      this.user.phone == null || this.user.phone == '' ||
      this.user.email == null || this.user.email == '' ||
      this.user.subtitle == null || this.user.subtitle == '' ||
      this.user.description == null || this.user.description == ''
    ) {
      this.badInfo = true;
      this.scrollToTop();
      const that = this;
      setTimeout(function () {
        that.badInfo = false;
      }, 10000);
      return;
    }

    let username = localStorage.getItem('amSessionUsername');
    this.user.username = username;

    this.userService.save(this.user).subscribe(
      res => {
        this.submitted = true;
        this.scrollToTop();
        const that = this;
        setTimeout(function () {
          that.submitted = false;
        }, 10000);
        console.log(res);
      }
    );
  }

  onClearErrorMessage() {
    this.badInfo = false;
  }

  onClearSuccessMessage() {
    this.submitted = false;
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


    this.userService.getUserByUsername(this.user.username).subscribe(
      res => {
        this.user = <User>res;
      }
    )

    this.scrollToTop();
  }

}
