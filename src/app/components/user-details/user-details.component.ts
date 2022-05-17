import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/IUser";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsComponent: IUser;
  userId: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.activatedRoute.params.subscribe(value => this.userDetailsComponent = history.state.data)
    }
    this.activatedRoute.params.subscribe(value => this.userId = value['id'])
    this.userService.getUserByID(this.userId).subscribe(value => this.userDetailsComponent = value)

  }

}
