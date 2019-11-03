import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute,Router} from "@angular/router";
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
   username;

  constructor(private route: ActivatedRoute, private router:Router, private userService: UserService) { 
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
      this.userService.getUserByUsername(this.username).subscribe(
        res => {
          this.user = res;
        }
      )
    });

    
  }

  ngOnInit() {
  }

}
