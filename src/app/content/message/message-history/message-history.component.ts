import { Component, OnInit } from '@angular/core';
import {HistoryMessageService, HistoryMessageConfig} from '../history-message.service';
import {HistoryData} from '../historyData';

declare var $: any;
@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.scss']
})
export class MessageHistoryComponent implements OnInit {
  private historyMessage: Array<HistoryData>;
  constructor(private historyMessageService: HistoryMessageService) {
  }
  getMessageData() {
      this.historyMessageService.getMessageData().subscribe((res: HistoryMessageConfig) => {
        this.historyMessage = res.historyData;
      });
  }
  ngOnInit() {
    this.getMessageData();
    $('#datepicker').datepicker({
      autoclose: true
    });
    $('#datepicker1').datepicker({
      autoclose: true
    });
  }
}
