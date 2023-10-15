import { Component, ViewEncapsulation } from '@angular/core';

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

  title = 'table-tutorial';
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

  data = [];
  columns = [{ name: 'Name' }, { name: 'Age' }, { name: 'Country' }];

  constructor() {}

  ngOnInit() {
    // Initialize your data here (empty array in this example).
    this.data = [];
  }

  addNewRow() {
    // Add a new empty row to the data array.
    this.data.push({});
  }
}