import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {ICar} from "../cars.models";
import {CarsService} from "./cars.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<ICar[]>([]);

  constructor(private carsService: CarsService) {
    this._setStorage()
  }

  _setStorage(): void {
    this.carsService.getAll().subscribe(value => this.storage.next(value))
  }
}
