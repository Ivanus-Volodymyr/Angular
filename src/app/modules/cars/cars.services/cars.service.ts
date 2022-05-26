import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../cars.models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) {
  }


  create(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car)
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars);
  }

  getById(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`);
  }

  updateCar(id: number, car: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`, car);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`);
  }
}
