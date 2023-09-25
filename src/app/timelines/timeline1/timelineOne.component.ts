import { Component, OnInit } from '@angular/core';
import { DataSet } from 'vis-data';
import * as vis from 'vis-timeline';

@Component({
  selector: 'timeline-one',
  templateUrl: './timelineOne.component.html',
  styleUrls: ['./timelineOne.component.scss'],
})
export class TimelineOneComponent implements OnInit {
  ngOnInit(): void {
    const container = document.getElementById('timeline-container');

    const items = new DataSet([
      { id: 1, content: 'Event 1', start: 10 },
      { id: 2, content: 'Event 2', start: 30 },
    ]);

    const groups = new DataSet([{ id: 1, content: 'Group 1' }]);

    const options = {
      start: 0,
      end: 50,
      format: {
        minorLabels: {
          custom: (date, scale, step) => {
          return date; // Return the numeric value as the label
          },
        },
      },
    };

    const timeline = new vis.Timeline(container, items, groups, options);
  }
}
