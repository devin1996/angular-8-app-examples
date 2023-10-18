import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { nebularDialogComponent } from './nebularDialog/nebularDialog.component';

@Component({
  selector: 'nebular',
  templateUrl: './nebular.component.html',
  styleUrls: ['./nebular.component.css'],
})
export class nebularComponent {
  constructor(private windowService: NbWindowService) {}

  openWindow() {
    this.windowService.open(nebularDialogComponent, {
      title: `Window`,
      windowClass: 'top-window-class',
    });
  }
}
