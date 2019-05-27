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
  change(id,n_id,value) {
    let data = { id: id, n_id:n_id, value: value}
    return this.http.get(this.changeUrl, { params: data });
  }
  constructor(private http: HttpClient) { }
}
