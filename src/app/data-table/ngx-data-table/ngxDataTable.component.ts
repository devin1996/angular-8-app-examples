import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngxDataTable.component.html',
  styleUrls: ['./ngxDataTable.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ngxDataTableComponent {
  //gender: string;
  // retrievedData = [];

  // tableData: any[] = [
  //   { no: '1', assets: 'Battery', platforms: 3 },
  //   { no: '2', assets: 'aircrafts', platforms: 4 },
  // ];

  // addTableValue() {
  //   this.retrievedData.forEach((value) => {
  //     this.tableData.push({
  //       no: 'generatedID',
  //       assets: value.assets,
  //       platforms: value.platforms,
  //     });
  //   });
  // }

  @ViewChild('datatableTeaching', { static: true }) table;

  rows = [
    {
      name: 'mercy',
      age: 10,
      town: 'Nairobi',
      country: 'kenya',
    },
    {
      name: 'Vincent',
      age: 40,
      town: 'Kampala',
      country: 'Uganda',
    },
    {
      name: 'Wesley',
      age: 41,
      town: 'Cairo',
      country: 'Egypt',
    },
  ];

  addNewRow() {
    // Add a new empty row to the data array.
    this.rows.push({
      name: 'x',
      age: 10,
      town: 'x',
      country: 'x',
    });
    this.rows = [...this.rows];
  }
}
