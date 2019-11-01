import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user = new User();

  private emptyFirstName = false;

  constructor(private userService: UserService) { }

  onSubmit() {
    if (this.user.firstName == null || this.user.firstName == '') {
      this.emptyFirstName = true;
      const that = this;
      setTimeout(function() {
        that.emptyFirstName = false;
      }, 4000);
      return;
    }

    this.userService.save(this.user).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  ngOnInit() {
  }

}
