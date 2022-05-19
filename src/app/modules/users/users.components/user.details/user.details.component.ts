import {Component, Input, OnInit} from '@angular/core';

import {UsersService} from "../../users.service";
import {IUser} from "../../users.models";

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  styleUrls: ['./user.details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

}
