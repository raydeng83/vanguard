import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { AppConst } from 'src/app/constants/appconst';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private serverPath = AppConst.serverPath;
    private colors = this.shuffle(AppConst.colors);
    private users;

    constructor(private userService: UserService, private router: Router) {
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

    ngOnInit(): void {
      this.getAllUsers();
    }

    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
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
