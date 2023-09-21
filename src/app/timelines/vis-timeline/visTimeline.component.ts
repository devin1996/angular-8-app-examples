import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import moment from 'moment';

@Component({
  selector: 'vis-timeline',
  templateUrl: './visTimeline.component.html',
  styleUrls: ['./visTimeline.component.css'],
})
export class VisTimelineComponent implements OnInit {
  timeline: Timeline;
  options: {};
  data: any;
  groups: any;

  @ViewChild('timeline', { static: true }) timelineContainer: ElementRef;

  constructor() {
    this.getTimelineData();
    this.getTimelineGroups();
    this.getOptions();
  }

  ngOnInit() {
    this.timeline = new Timeline(
      this.timelineContainer.nativeElement,
      null,
      this.options
    );
    this.timeline.setGroups(this.groups);
    this.timeline.setItems(this.data);
  }

  getTimelineGroups() {
    this.groups = new DataSet([
      {
        id: 0,
        content: 'Group 1',
        title: 'Just For Hover G',
      },
      {
        id: 1,
        content: 'Group 2',
      },
    ]);
  }

  getTimelineData() {
    this.data = new DataSet();
    this.data.add({
      id: 1,
      group: 0,
      content: 'CAS1',
      start: new Date(2023, 8, 21),
      end: new Date(2023, 8, 22),
      title: 'Just For Hover',
    });
  }

  // setting time line options
  getOptions() {
    this.options = {
      orientation: { axis: 'top' },
      start: moment().subtract(10, 'm').toISOString(),
      end: moment().add(40, 'm').toISOString(),
      editable: {
        remove: true,
        add: true,
        updateTime: true,
      },
      itemsAlwaysDraggable: {
        item: true,
      },
      max: new Date(2023, 10, 21),
      min: new Date(2023, 8, 20),
      rollingMode: {
        follow: true,
      },
      showWeekScale: true,
      showTooltips: true,
      timeAxis: { scale: 'minute', step: 1 },
      //zoomMax: 3600000,
      //zoomMin: 30000, // 30 secs
      //moment:
    };
  }

  addCustomTime() {}

  zoomIn() {
    this.timeline.zoomIn(0.2);
  }

  zoomOut() {
    this.timeline.zoomOut(0.2);
  }

  activateTimeline() {
    this.timeline.toggleRollingMode();
  }
}
