import { Injectable } from '@angular/core';
import {City} from './locations';
import {Cities} from './mock-city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
getCities(): City[] {
  return Cities;
}
  constructor() { }
}
