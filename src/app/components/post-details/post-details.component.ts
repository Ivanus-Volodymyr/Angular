import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsComponent: IPost
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.postDetailsComponent = history.state.data)
  }

}
