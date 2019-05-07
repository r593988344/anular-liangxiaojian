import { Injectable } from '@angular/core';
import {SensorList} from './sensor-list';
import {SensorListMock} from './sensor-list-mock';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SensorListService {
  sensorListUrl =  'http://127.0.0.1:3000/sensorList';
  getSensorList() {
    // return SensorListMock;
    return this.http.get(this.sensorListUrl);
}
constructor(private http: HttpClient) { }
}
