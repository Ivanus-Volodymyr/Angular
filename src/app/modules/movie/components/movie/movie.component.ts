import {Component, Input, OnInit} from '@angular/core';
import {IResults} from "../../models";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: IResults;
  imgUrl: string

  constructor() {
    this.imgUrl = urls.img;
  }

  ngOnInit(): void {
  }

}
