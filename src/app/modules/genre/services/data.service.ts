import {Injectable} from '@angular/core';
import {GenreService} from "./genre.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject([])

  constructor(private genreService: GenreService) {
    this._setStorage()
  }

  _setStorage(): void {
    this.genreService.getGenre().subscribe(value => this.storage.next(value.genres))
  }

}
