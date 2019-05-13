import { Component, OnInit } from '@angular/core';
import {SensorList} from './sensor-list';
import {SensorListService, SensorConfig} from './sensor-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {
  private sensorList: Array<SensorList>;
  constructor(private sensorListService: SensorListService) { }
  getSensorLists() {
    this.sensorListService.getSensorList()
      .subscribe((data: SensorConfig) => {
        this.sensorList = data.sensorList;
      });
  }
  ngOnInit() {
    this.getSensorLists();
  }
}

