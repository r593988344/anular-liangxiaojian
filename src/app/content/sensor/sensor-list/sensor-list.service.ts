import { Injectable } from '@angular/core';
import {SensorList} from './sensor-list';
import {SensorListMock} from './sensor-list-mock';
import {HttpClient} from '@angular/common/http';

export interface SensorConfig {
  sensorList: Array<SensorList>;
}
@Injectable({
  providedIn: 'root'
})


export class SensorListService {
  sensorListUrl =  'http://127.0.0.1:3000/sensorList';
  changeUrl =  'http://127.0.0.1:3000/change';
  getSensorList() {
    // return SensorListMock;
    return this.http.get<SensorConfig>(this.sensorListUrl);
}
  change(id1, value, id2) {
    const data = { id1: id1, value: value, id2: id2};
    return this.http.get(this.changeUrl, { params: data });
}
constructor(private http: HttpClient) { }
}
