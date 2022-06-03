import {Component, OnInit} from '@angular/core';
import {DataService, MovieService} from "../../services";
import {IResults} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IResults[];

  constructor(private dataService: DataService, private movieService: MovieService) {
    this._createForm();
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

  _createForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.minLength(1), Validators.maxLength(20), Validators.required]),
    });
  }
}
