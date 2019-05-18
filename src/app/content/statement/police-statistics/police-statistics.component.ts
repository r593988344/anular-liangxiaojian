import { Component, OnInit } from '@angular/core';
import {PoliceService} from './police.service';
import {Police} from './police';

declare var $: any;
@Component({
  selector: 'app-police-statistics',
  templateUrl: './police-statistics.component.html',
  styleUrls: ['./police-statistics.component.scss']
})
export class PoliceStatisticsComponent implements OnInit {
  private police: Array<Police>;
  constructor(private policeService: PoliceService) { }
  getPoliceData(): void {
    this.policeService.getPoliceList().subscribe(data => {
      this.police = data.police;
    });
}
  ngOnInit() {
    $('#datepicker').datepicker({
      autoclose: true
    });
    this.getPoliceData();
  }

}

