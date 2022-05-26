import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cars-layout',
  templateUrl: './cars-layout.component.html',
  styleUrls: ['./cars-layout.component.css']
})
export class CarsLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthorization()) {
      this.router.navigate(['cars/all']);
      return;
    }
    this.router.navigate(['auth/login']);
  }

}
