import { Injectable } from '@angular/core';
import {HistoryData} from './historyData';
import {HttpClient} from '@angular/common/http';
export interface HistoryMessageConfig {
  historyData: Array<HistoryData>;
}
@Injectable({
  providedIn: 'root'
})
export class HistoryMessageService {
  configUrl = 'http://127.0.0.1:3000/historyMessage';
  getMessageData() {
  return this.http.get<HistoryMessageConfig>(this.configUrl);
  }
  constructor(private http: HttpClient) { }
}
