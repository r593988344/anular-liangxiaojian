import { Component, OnInit } from '@angular/core';
import {SensorList} from './sensor-list';
import {SensorListService, SensorConfig} from './sensor-list.service';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {
  private sensorList: Array<SensorList>;
  private sectionId: string;
  private  num: string;
  dataId: '';
  constructor(private sensorListService: SensorListService,
              private http: HttpClient) { }
  // 获取传感器列表
  getSensorLists() {
    this.sensorListService.getSensorList()
      .subscribe((data: SensorConfig) => {
        this.sensorList = data.sensorList;
      });
  }
  // 删除传感器
  deleteSensor(data) {
    const deleteUrl = 'http://127.0.0.1:3000/deleteSensorList';
    this.http.post(deleteUrl, {id: data._id}
    ).subscribe((res) => {
      if (res.success === true) {
        this.getSensorLists();
      } else {
      }
    });
  }
  // 搜索传感器
  searchSensor() {
    const searchUrl = 'http://127.0.0.1:3000/searchSensorList';
    // const options = { params: new HttpParams().set('name', term) };
    console.log({collectorNumber: this.num, sectionId: this.sectionId})
    this.http.post(searchUrl, {collectorNumber: this.num, sectionId: this.sectionId}).subscribe((res: SensorConfig) => {
      this.sensorList = res.sensorList;
    });
  }
  ngOnInit() {
    this.getSensorLists();
  }
}


