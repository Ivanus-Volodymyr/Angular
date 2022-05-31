import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MovieService} from "./movie.service";
import {IMovie} from "../models";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  storage = new BehaviorSubject<IMovie>({page: null, results: [], total_pages: null,});
  genres = [];
  genre = this.genres.toString()


  constructor(private movieService: MovieService) {
    this._setStorage();
  }

  _setStorage(): void {
    this.movieService.getMovies(this.storage.value.page, this.genre).subscribe(value => this.storage.next(value))
  }
}
