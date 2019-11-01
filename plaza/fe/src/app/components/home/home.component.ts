import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { AppConst } from 'src/app/constants/appconst';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private serverPath = AppConst.serverPath;
    private users;

    constructor(private userService: UserService) {

    }

    getAllUsers() {
      this.userService.getAllUsers().subscribe(
        res => {
          this.users = res;
          console.log(this.users);
        }
      );
    }

    ngOnInit(): void {
      this.getAllUsers();
    }
}
