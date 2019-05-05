import { Injectable } from '@angular/core';
import {SensorList} from './sensor-list';
import {SensorListMock} from './sensor-list-mock';

@Injectable({
  providedIn: 'root'
})
export class SensorListService {
  getSensorList(): SensorList[] {
    return SensorListMock;
}
  constructor() { }
}
