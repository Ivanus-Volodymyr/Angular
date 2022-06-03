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
  name = '';

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.movies = value.results
      this.total_page = value.total_pages;
      this.page = this.dataService.page;
    });
  }


  _createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.minLength(1), Validators.maxLength(20), Validators.required]),
    });
  }

  search(): void {
    const {name} = this.form.getRawValue();
    this.name = name;
    this.movieService.getMovieByNae(name, this.page).subscribe(value => {
      this.dataService.storage.next(value);
    })
  }

  change(event: number) {
    this.page = event;
    this.dataService.page = event;
    this.page = 1;

    if (this.name === '') {
      this.movieService.getMovies(event, this.dataService.genre).subscribe(value => {
        this.dataService.storage.next(value);
      })
    }
    this.movieService.getMovieByNae(this.name, event).subscribe(value => {
      this.dataService.storage.next(value);
    })
  }
}
