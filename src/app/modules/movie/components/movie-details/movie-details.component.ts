import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieDetails} from "../../models";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovieDetails;
  img: string

  constructor(private routes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routes.data.subscribe(({movieDetails}) => this.movie = movieDetails);
    this.img = urls.img
    console.log(this.movie);
  }

}
