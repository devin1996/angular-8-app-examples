import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimelineParent } from './timelines/timelineParent/timelineParent.component';
import { TimelineOneComponent } from './timelines/timeline1/timelineOne.component';
import { VisTimelineComponent } from './timelines/vis-timeline/visTimeline.component';
import { AnimationTimelineComponent } from './timelines/animation-timeline/animationTimeline.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TimelineOneComponent,
    TimelineParent,
    VisTimelineComponent,
    AnimationTimelineComponent,
    ClockComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
