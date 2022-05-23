import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../comments.models";

@Component({
  selector: 'app-comment.details',
  templateUrl: './comment.details.component.html',
  styleUrls: ['./comment.details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetail: IComment;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentDetailsData}) => this.commentDetail = commentDetailsData)
  }

}
