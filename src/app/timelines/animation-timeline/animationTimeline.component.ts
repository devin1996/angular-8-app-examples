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
  timeline: Timeline;

  @ViewChild('timeline', { static: true }) timelineContainer: ElementRef;

  ngOnInit() {
    const model = { rows: [] as Array<TimelineRow> } as TimelineModel;
    const options = {
      id: 'timeline',
      headerFillColor: 'GREY',
      rowsStyle: {
        height: 35,
      } as TimelineRowStyle,
    } as TimelineOptions;

    this.timeline = new Timeline(options, model);
  }

  zoomIn() {
    this.timeline.zoomIn(0.5);
  }

  zoomOut() {
    this.timeline.zoomOut(0.5);
  }
}
