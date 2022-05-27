import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UsersService} from "../../users.service";
import {IUser} from "../../users.models";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData}) => this.users = usersData)
  }

}
