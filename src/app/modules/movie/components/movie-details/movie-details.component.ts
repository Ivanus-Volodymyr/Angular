import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovieDetails} from "../../models";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails:IMovieDetails;

  constructor(private routes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routes.data.subscribe(({movieDetails}) => console.log(movieDetails))
  }

}
