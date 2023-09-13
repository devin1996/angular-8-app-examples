import { Component } from '@angular/core';
import {
  Timeline,
  TimelineRow,
  TimelineModel,
  TimelineOptions,
TimelineRowStyle,
} from 'animation-timeline-js';

@Component({
  selector: 'timeline-one',
  templateUrl: './timelineOne.component.html',
  styleUrls: ['./timelineOne.component.css'],
})
export class TimelineOneComponent {
  
  methodTest(){
    const model = { rows: [] as Array<TimelineRow> } as TimelineModel;
    const options = {
    id: "timeline",
    rowsStyle: {
      height: 35,
    } as TimelineRowStyle,
  } as TimelineOptions;  
  }
  

  const timeline = new Timeline(options, model);
}
