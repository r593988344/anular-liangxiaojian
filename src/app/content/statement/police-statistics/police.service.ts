import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Police} from './police';
export interface PoliceConfig {
  police: Array<Police>;
}
@Injectable({
  providedIn: 'root'
})
export class PoliceService {
  policeUrl = 'http://127.0.0.1:3000/police';
  getPoliceList() {
    return this.http.get<PoliceConfig>(this.policeUrl);
  }
  constructor(private http: HttpClient) { }
}
/*

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Police} from './police';

export interface PoliceConfig {
  police: Array<Police>;
}
@Injectable({
  providedIn: 'root'
})


export class PoliceService {
  policeListUrl =  'http://127.0.0.1:3000/police';
  getPoliceList() {
    return this.http.get<PoliceConfig>(this.policeListUrl);
  }
  constructor(private http: HttpClient) { }
}
*/
