import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {
  private sensorList: Array<SensorList>;
  constructor() { }

  ngOnInit() {
    this.sensorList = [
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启'),
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启'),
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启'),
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启'),
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启'),
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启'),
      new SensorList(112233, 223344, 99, '30-300', '25℃', '88', '135°', '15°', '2345', '2019-04-30 12:35:04', '开启')
    ];
  }
}

export class SensorList {
  constructor(
    public collectorNumber: number,
    public sensorNumber: number,
    public vibrationThreshold: number,
    public cycle: string,
    public temperature: string,
    public humidity: string,
    public longitude: string,
    public latitude: string,
    public sectionId: string,
    public creatTime: string,
    public status: string
  ) {
  }
}
