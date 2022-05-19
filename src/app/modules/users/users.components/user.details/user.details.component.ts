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

  userDetails:IUser;
  userId: string;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.activatedRoute.params.subscribe(value => this.userDetails = history.state.data);
      this.activatedRoute.params.subscribe(value => this.userId = value['id']);
    }
    this.activatedRoute.params.subscribe(value => this.userId = value['id']);
    this.userService.getUserById(this.userId).subscribe(value => this.userDetails = value)
  }

}
