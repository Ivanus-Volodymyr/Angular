import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UsersService} from "../../users.service";
import {IUser} from "../../users.models";

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  styleUrls: ['./user.details.component.css'],
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;
  userId: string;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(history.state.data);
    this.activatedRoute.data.subscribe(({userDetailData}) => this.userDetails = userDetailData);
  }

}
