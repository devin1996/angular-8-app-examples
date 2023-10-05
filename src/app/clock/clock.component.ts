import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  clock = '';
  clockHandle;

  constructor() {}

  ngOnInit(): void {
    this.clockHandle = setInterval(() => {
      this.clock = new Date().toLocaleString();
      //console.log('Hi');
    }, 1000);
  }
}
