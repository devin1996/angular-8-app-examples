import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import moment from 'moment';

// Ref https://visjs.github.io/vis-timeline/docs/timeline/
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
  date = new Date();

  currentTime: any;
  customTime: any;
  eventProperties: any;
  itemRange: any;
  selection: any;
  visibleItems: any;
  window: any;

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
      start: moment().subtract(10, 'm').toISOString(),
      end: moment().add(10, 'm').toISOString(),
      title: 'Just For Hover',
    });
  }

  // setting time line options
  getOptions() {
    this.options = {
      rollingMode: {
        follow: false,
      },
      orientation: { axis: 'top' },
      pause: true,
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
      min: new Date(2023, 10, 20),
      showWeekScale: false,
      showCurrentTime: true,
      showTooltips: true,
      timeAxis: { scale: 'minute', step: 1 },
      zoomMax: 900000,
      zoomMin: 60000, // 1 min
      //onAdd: (item, callback) => {},
    };
  }

  //Add new vertical bar representing a custom time that can be dragged by the user.
  addCustomTime(date) {
    this.timeline.addCustomTime(date);
  }

  //Destroy the Timeline. The timeline is removed from memory.
  destroyTimeline() {
    this.timeline.destroy();
  }

  fit() {
    this.timeline.fit();
  }

  focus() {
    this.timeline.focus(1);
  }

  getCurrentTime() {
    this.currentTime = this.timeline.getCurrentTime();
  }

  getCustomTime() {
    this.currentTime = this.timeline.getCustomTime(1);
  }

  //Didn't completed
  getEventProperties() {
    //this.eventProperties = this.timeline.getEventProperties();
    // group (Number or null): the id of the clicked group.
    // item (Number or null): the id of the clicked item.
    // customTime (Number or null): the id of the clicked custom-time.
    // pageX (Number): absolute horizontal position of the click event.
    // pageY (Number): absolute vertical position of the click event.
    // x (Number): relative horizontal position of the click event.
    // y (Number): relative vertical position of the click event.
    // time (Date): Date of the clicked event.
    // snappedTime (Date): Date of the clicked event, snapped to a nice value.
    // what (String or null): name of the clicked thing: item, background, axis, group-label, custom-time, or current-time.
    // event (Object): the original click event.
    // document.getElementById('myTimeline').onclick = function (event) {
    //   var props = timeline.getEventProperties(event)
    //   console.log(props);
    // }
  }

  stopTimeline() {
    this.timeline.stopCurrentTime(); // This stops the current time indicator line
  }

  getItemRange() {
    this.itemRange = this.timeline.getItemRange();
    console.log(this.timeline.getItemRange());
  }

  getSelection() {
    this.selection = this.timeline.getSelection();
  }

  getVisibleItems() {
    this.visibleItems = this.timeline.getVisibleItems();
  }

  getWindow() {
    this.window = this.timeline.getWindow();
    console.log(this.window);
  }

  //moveTo(time [, options, callback])

  //Didn't completed
  clickOn() {
    this.timeline.on('select', function () {
      alert('selected items: ');
    });
  }

  onSelect(properties) {
    alert('selected items: ' + properties.items);
  }

  on(event, callback) {
    this.timeline.on('select', function (properties) {
      alert('selected items: ' + properties.items);
    });

    function onSelect(properties) {
      alert('selected items: ' + properties.items);
    }

    // add event listener

    // do stuff...

    // remove event listener
    this.timeline.off('select', onSelect);
  }

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
