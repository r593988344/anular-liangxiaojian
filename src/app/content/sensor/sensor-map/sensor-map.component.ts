import {Component, OnInit, AfterViewChecked, AfterContentChecked} from '@angular/core';
import {CityService, CityConfig} from './city.service';
import {City} from './locations';
import {SensorListService, SensorConfig} from '../sensor-list/sensor-list.service';
import {SensorList} from '../sensor-list/sensor-list';

declare let BMap: any;
// declare let L;
@Component({
  selector: 'app-sensor-map',
  templateUrl: './sensor-map.component.html',
  styleUrls: ['./sensor-map.component.scss']
})
export class SensorMapComponent implements OnInit, AfterViewChecked , AfterContentChecked {
  private map: any;
  private cities: Array<City>;
  private location: Array<number> = [115, 32.8];
  private marker: any;
  private point: any;
  private allLocations: Array<SensorList>;
  constructor(private cityService: CityService,
              private sensorListService: SensorListService) { }
  getCities(): void {
   this.sensorListService.getSensorList()
      .subscribe((data: SensorConfig) => {
        this.allLocations = data.sensorList;
        this.setSign();
      });
   this.cityService.getCities().
    subscribe((data: CityConfig) => {
      this.cities = data.cities;
     });
  }
  setSign(): void {
    console.log(this.allLocations);
    this.allLocations.forEach(item => {
      const point = new BMap.Point(item.longitude, item.latitude);
      this.addMarker(point, item);
    });
  }
  // 编写自定义函数,创建标注
  addMarker(point, item) {
    const marker = new BMap.Marker(point);
    const label = new BMap.Label(item.collectorNumber, {offset: new BMap.Size(20, -10)});
    marker.setLabel(label);
    this.map.addOverlay(marker);
  }

  changeArea(value) {
    const newLocation = value.split(',');
    this.location = newLocation;
    this.map.panTo(new BMap.Point(this.location[0], this.location[1]));
    this.point = new BMap.Point(this.location[0], this.location[1]);
  }

  ngOnInit() {
    this.map = new BMap.Map('map');
    this.point = new BMap.Point(116.404, 39.915);
    this.map.centerAndZoom(this.point, 5);
    this.map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
    this.getCities();
  }
  ngAfterContentChecked() {
    // this.setSign();
  }
  ngAfterViewChecked() {
    // console.log(this.allLocations);
  }
}
