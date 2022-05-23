import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../posts.models";

@Component({
  selector: 'app-post.details',
  templateUrl: './post.details.component.html',
  styleUrls: ['./post.details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postDetailData}) => this.postDetails = postDetailData)
  }

}
