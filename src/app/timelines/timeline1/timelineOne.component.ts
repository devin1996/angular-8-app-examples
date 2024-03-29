import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';

@Component({
  selector: 'timeline-one',
  templateUrl: './timelineOne.component.html',
  styleUrls: ['./timelineOne.component.scss'],
})
export class TimelineOneComponent implements OnInit {
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
      content: 'item 1',
      start: 0,
      end: 2,
      //type: 'box',
      editable: {
        remove: true,
        updateGroup: true,
        updateTime: true,
      },
    });
  }

  items: [
    {},
    {
      start: 5;
      end: 15;
      content: 'Item 2';
    }
  ];
  // setting time line options
  getOptions() {
    this.options = {
      // timeAxis: true,
      // timeAxisScale: 'number',

      timeAxis: true,
      timeAxisScale: 'number',
      start: -10,
      end: 10,
      zoomKey: null,
      // stack: true,
      // start: 0,
      // end: 10,
      // timeAxis: {
      //   scale: 'hour',
      //   step: 5,
      // },
      //itemsAlwaysDraggable: true,
      //editable: true,
      // margin: {
      //   axis: 0,
      // },
      // showMajorLabels: true,
      // orientation: 'top',
      //clickToUse: true,
      // editable: {
      //   remove: true,
      //   add: true,
      // },
      // itemsAlwaysDraggable: {
      //   item: true,
      //   range: true,
      // },
      // rollingMode: {
      //   //follow: true,
      //   //offset: '0',
      // },
      // showCurrentTime: true,
      // showTooltips: true,
      // moveable: true,
    };
  }
}
