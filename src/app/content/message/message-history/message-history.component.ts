import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.scss']
})
export class MessageHistoryComponent implements OnInit {
  private historyMessage: Array<HistoryData>;
  constructor() {
  }

  ngOnInit() {
    $('#datepicker').datepicker({
      autoclose: true
    });
    $('#datepicker1').datepicker({
      autoclose: true
    });

    this.historyMessage = [
      new HistoryData(15868177611, '发送测试短信', '2019-03-10 14:51:02', 1, 'success'),
      new HistoryData(15868177612, '发送测试短信', '2019-04-10 14:51:02', 2, 'success'),
      new HistoryData(15868177634, '发送测试短信', '2019-05-10 14:51:02', 1, 'failed'),
      new HistoryData(15868177611, '发送测试短信', '2019-06-10 14:51:02', 1, 'success'),
      new HistoryData(15868177651, '发送测试短信', '2019-07-10 14:51:02', 1, 'success'),
      new HistoryData(15868177611, '发送测试短信', '2019-08-10 14:51:02', 1, 'success'),
      new HistoryData(15868177611, '发送测试短信', '2019-09-10 14:51:02', 1, 'failed'),
    ];
  }
}
export class HistoryData {
  constructor(
   public phoneNumber: number,
   public sendMessage: string,
   public sendTime: string,
   public sendStatus: number,
   public result: string
  ) {
  }
}
