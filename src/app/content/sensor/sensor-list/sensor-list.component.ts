import { Component, OnInit } from '@angular/core';
import {SensorListService} from './sensor-list.service';
import {SensorList} from './sensor-list';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {
  private sensorList: Array<SensorList>;
  constructor(private sensorListService: SensorListService) { }
  getSensorLists() {
    this.sensorList = this.sensorListService.getSensorList();
  }
  ngOnInit() {
    this.getSensorLists();
    console.log(this.sensorList);
  }
}

