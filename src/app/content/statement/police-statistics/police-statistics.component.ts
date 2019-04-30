import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-police-statistics',
  templateUrl: './police-statistics.component.html',
  styleUrls: ['./police-statistics.component.scss']
})
export class PoliceStatisticsComponent implements OnInit {
  private policeStatistics: Array<PoliceStatistics>;
  constructor() { }

  ngOnInit() {
    $('#datepicker').datepicker({
      autoclose: true
    });

    this.policeStatistics = [
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
      new PoliceStatistics('2019.04.30 13:45:59', 5, 12312, 34232, 4, 2),
    ];
  }

}

export class PoliceStatistics {
  constructor(
    public alarmingTIme: string,
    public alarmLevel: number,
    public sectionId: number,
    public manageId: number,
    public collectorNumber: number,
    public sensorNumber: number
  ) {
  }
}
