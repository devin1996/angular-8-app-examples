import { Component, OnInit } from '@angular/core';
//import { ApexCharts } from 'apexcharts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class ApexchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const chart = new ApexCharts({
    //   el: '#chart',
    //   series: [{
    //     name: 'Timeline',
    //     data: [
    //       { x: -10, y: 100, label: 'Event 1' },
    //       { x: 0, y: 50, label: 'Event 2' },
    //       { x: 10, y: 0, label: 'Event 3' },
    //     ],
    //   }],
    //   chart: {
    //     type: 'timeline',
    //   },
    // });

    // chart.render();
  }

}