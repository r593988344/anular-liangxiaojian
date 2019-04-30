import { Component, OnInit } from '@angular/core';
import {CityService} from './city.service';
import {City} from './locations';

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
  constructor(private cityService: CityService) { }
  getCities(): void {
    this.cities = this.cityService.getCities();
  }
  changeArea(value) {
    const newLocation = value.split(',');
    this.location = newLocation;
    this.map.panTo(L.latLng(this.location[1], this.location[0]));
    const marker = L.marker([this.location[1], this.location[0]]).addTo(this.map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
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

    const marker = L.marker([30, 115]).addTo(this.map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
  }
}
