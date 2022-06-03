import {Component, OnInit} from '@angular/core';
import {DataService, MovieService} from "../../services";
import {IResults} from "../../models";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IResults[];

  constructor(private dataService: DataService, private movieService: MovieService) {
  }

  page: number;
  total_page: number;

  form: FormGroup;
  name: string;

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.movies = value.results
      this.total_page = value.total_pages;
      this.page = this.dataService.page;
    });
  }

  change(event: number) {
    this.page = event;
    this.dataService.page = event;
    this.page = 1;
    this.movieService.getMovies(event, this.dataService.genre).subscribe(value => {
      this.dataService.storage.next(value);
    })
  }
}
