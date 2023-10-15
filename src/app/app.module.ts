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
import { DialogComponent } from './dialog/dialog-component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { ngxDataTableComponent } from './data-table/ngx-data-table/ngxDataTable.component';
import { TableFilterPipe } from './data-table/ngx-data-table/table-filter.pipe';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    // MatFormFieldModule,
    // MatDialogModule,
    // MatInputModule,
    // MatChipsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TimelineOneComponent,
    TimelineParent,
    VisTimelineComponent,
    AnimationTimelineComponent,
    ClockComponent,
    DialogComponent,
    ngxDataTableComponent,
    TableFilterPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
