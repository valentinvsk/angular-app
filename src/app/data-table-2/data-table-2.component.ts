import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table-2',
  templateUrl: './data-table-2.component.html',
  styleUrls: ['./data-table-2.component.less']
})
export class DataTable2Component implements OnInit {

  constructor() { }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: '../assets/ajax/array.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }
}
