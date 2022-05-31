import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MovieService} from "./movie.service";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  stor = new BehaviorSubject([])


  constructor(private movieService: MovieService) {

  }
}
