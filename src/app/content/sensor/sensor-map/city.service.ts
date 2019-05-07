import { Injectable } from '@angular/core';
import {City} from './locations';
import {Cities} from './mock-city';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  configUrl = 'http://127.0.0.1:3000/city';
  getCities() {
    return this.http.get(this.configUrl);
}
  constructor(private http: HttpClient) { }
}
