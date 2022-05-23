import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../users.models";

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  styleUrls: ['./user.details.component.css'],
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userDetailData}) => this.userDetails = userDetailData);
  }

}
