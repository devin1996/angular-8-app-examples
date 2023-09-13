import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimelineParent } from './timelines/timelineParent/timelineParent.component';
import { TimelineOneComponent } from './timelines/timeline1/timelineOne.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TimelineOneComponent,
    TimelineParent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
