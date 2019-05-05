import { Component, OnInit } from '@angular/core';
import {CityService} from './city.service';
import {City} from './locations';
import {SensorListService} from '../sensor-list/sensor-list.service';
import {SensorList} from '../sensor-list/sensor-list';

declare let L;
@Component({
  selector: 'app-sensor-map',
  templateUrl: './sensor-map.component.html',
  styleUrls: ['./sensor-map.component.scss']
})
export class SensorMapComponent implements OnInit {
  private map: any;
  private cities: City[];
  private location: Array<number> = [115, 32.8];
  private marker: any;
  private allLocations: Array<SensorList>;
  constructor(private cityService: CityService,
              private sensorListService: SensorListService) { }
  getCities(): void {
    this.allLocations = this.sensorListService.getSensorList();
    this.cities = this.cityService.getCities();
  }
  setSign() {
    this.allLocations.forEach(item => {
      const marker = L.marker([item.latitude, item.longitude]).addTo(this.map);
      // const layer = L.Polygon([item.latitude, item.longitude]).bindPopup('Hi There!').addTo(this.map);
    });
  }
  changeArea(value) {
    const newLocation = value.split(',');
    this.location = newLocation;
    this.map.panTo(L.latLng(this.location[1], this.location[0]));
    this.marker.update([this.location[1], this.location[0]]);
    this.marker.setLatLng([this.location[1], this.location[0]]);
    this.marker.bindPopup('<b>当前所选地区</b>').openPopup();
  }

  ngOnInit() {
    this.getCities();
    this.map = L.map('map').setView([32.8, 115], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' +
        '<a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
        ' contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' +
        ', Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'your.mapbox.access.token'
    }).addTo(this.map);
    this.setSign();
    this.marker = L.marker([this.location[1], this.location[0]]).addTo(this.map);
    this.marker.bindPopup('<b>当前所选地区</b>').openPopup();
  }
}
