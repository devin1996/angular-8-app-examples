import { Component, OnInit } from '@angular/core';
import {
  NliTimelineModule,
  TimeLineModel,
  TimeLineStepModel,
} from '@next-level-integration/timeline';

@Component({
  selector: 'timeline-one',
  templateUrl: './timelineOne.component.html',
  styleUrls: ['./timelineOne.component.scss'],
})
export class TimelineOneComponent implements OnInit {
  timelineModel: any;
  ngOnInit() {
    const timelineModel = new TimeLineModel(5, [
      new TimeLineStepModel('17', 'Zählerwechsel17', new Date('2014-04-03')),
      new TimeLineStepModel('18', 'Zählerwechsel18', new Date('2015-04-03')),
      new TimeLineStepModel('1', 'Zählerwechsel1', new Date('2016-04-03')),
      new TimeLineStepModel('2', 'Zählerwechsel2', new Date('2017-04-03')),
      new TimeLineStepModel('3', 'Zählerwechsel3', new Date('2018-04-03')),
      new TimeLineStepModel('4', 'Zählerwechsel4', new Date('2019-04-03')),
      new TimeLineStepModel('5', 'Zählerwechsel5', new Date('2020-04-03')),
      new TimeLineStepModel('6', 'Zählerwechsel6', new Date('2013-04-03')),
      new TimeLineStepModel('7', 'Zählerwechsel7', new Date('2012-04-03')),
      new TimeLineStepModel('8', 'Zählerwechsel8', new Date('2011-04-03')),
      new TimeLineStepModel('9', 'Zählerwechsel9', new Date('2010-04-03')),
      new TimeLineStepModel('10', 'Zählerwechsel10', new Date('2009-04-03')),
      new TimeLineStepModel('11', 'Zählerwechsel11', new Date('2008-04-03')),
      new TimeLineStepModel('12', 'Zählerwechsel12', new Date('2007-04-03')),
      new TimeLineStepModel('13', 'Zählerwechsel13', new Date('2006-04-03')),
      new TimeLineStepModel('14', 'Zählerwechsel14', new Date('2003-04-03')),
      new TimeLineStepModel('15', 'Zählerwechsel15', new Date('2002-04-03')),
      new TimeLineStepModel('16', 'Zählerwechsel16', new Date('2000-11-11')),
    ]);
  }
}
