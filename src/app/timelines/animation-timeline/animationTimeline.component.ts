import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Timeline,
  TimelineModel,
  TimelineOptions,
  TimelineRow,
  TimelineRowStyle,
} from 'animation-timeline-js';

@Component({
  selector: 'animation-timeline',
  templateUrl: './animationTimeline.component.html',
  styleUrls: ['./animationTimeline.component.css'],
})
export class AnimationTimelineComponent implements OnInit {
  @ViewChild('timeline', { static: true }) timelineContainer: ElementRef;

  ngOnInit() {
    const model = { rows: [] as Array<TimelineRow> } as TimelineModel;
    const options = {
      id: 'timeline',
      rowsStyle: {
        height: 35,
      } as TimelineRowStyle,
    } as TimelineOptions;

    const timeline = new Timeline(options, model);
  }
}
