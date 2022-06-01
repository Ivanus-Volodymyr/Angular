import {Component, Input, OnInit} from '@angular/core';

import {IGenre} from "../../models";
import {DataService, MovieService} from "../../../movie/services";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: IGenre;

  constructor(private movieDataService: DataService, private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  useGenre(id: number) {
    let genre = id.toString()
    this.movieDataService.genre = genre
    this.movieService.getMovies(this.movieDataService.page, genre).subscribe(value => {
      this.movieDataService.storage.next(value);
      this.movieDataService.page = 1;
    })

  }


}
