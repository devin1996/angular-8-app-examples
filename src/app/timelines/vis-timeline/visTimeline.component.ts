import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';

@Component({
  selector: 'vis-timeline',
  templateUrl: './visTimeline.component.html',
  styleUrls: ['./visTimeline.component.css'],
})
export class VisTimelineComponent {
  timeline: Timeline;
  options: {};
  data: any;
  groups: any;

  //@ViewChild('timeline' ) :;
}
