import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MovieService} from "./movie.service";
import {IMovie} from "../models";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  storage = new BehaviorSubject<IMovie>({page: 1, results: [], total_pages: null,});
  page = null;
  genres = [];
  genre = this.genres.toString()


  constructor(private movieService: MovieService) {
    this._setStorage();
  }

  setPage(): void {
    this.page += 1;
  }

  _setStorage(): Observable<IMovie> {
    this.movieService.getMovies(this.page, this.genre).subscribe(value => this.storage.next(value))
    return this.storage;
  }
}
