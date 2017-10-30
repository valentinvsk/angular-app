import { Component, OnInit, NgZone } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { SearchPipe } from '../search.pipe';

import * as _ from 'lodash';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.less']
})
export class DataTableComponent implements OnInit {

  rowsData: any[];
  columnTitles: string[] = [];
  sortedOrder: string = 'asc';
  currentSortedRule: string = '';
  columnWidthStyle: any = {};
  totalNumberOfRows: number = 0;
  rowInEditMode: number = -1;
  searchedText: string = '';
  options: string[] = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  inputVal: boolean = false;

  constructor(private _dataProvider? : TableDataService, private zone?: NgZone) {}

  ngOnInit() {
    if (localStorage.getItem('data') == undefined) {
      this._dataProvider.getData()
      .subscribe(result => {
          this.rowsData = result['people'];
          this._initAllRowsWithFields();
          this._mapColumnTitles();
       });
    } else {
      this.rowsData = JSON.parse(localStorage.getItem('data'));
      this._mapColumnTitles();
    }

    this.rowsData = _.orderBy(this.rowsData, ['id'], ['desc']);
  }

  toggleCheckBox = (val: boolean) => {val = !val;};

  catchEventType = ($event, rowsData : any[]) => {
      let functionName = $event.toLowerCase() + 'Row';
      this[functionName](rowsData);
  };

  addRow = () => {
    if (!_.isEmpty(this.searchedText)) {
      return;
    }

    let newPerson = {'id': -1};

    _.each(this.columnTitles, function(key_title) {
      let reformatProp = key_title.replace(/ /g, '_').toLowerCase();
      newPerson[reformatProp] = '';
    });

    _.each(this.rowsData, function(person) {
      person['selected'] = false;
      if (newPerson.id < person.id) {
        newPerson.id = person.id;
      }
    });

    newPerson.id += 1;
    newPerson['selected'] = true;
    this.rowsData.push(newPerson);
    this.rowInEditMode = newPerson['id'];
  };

  saveRow = () => {
      this.rowInEditMode = -1;
      this._saveModifications();
  }

  editRow = () => {
    let self = this;

    _.each(this.rowsData, function(row){
      if (row['selected'] == true) {
          self.rowInEditMode = row['id'];
          return false;
      }
    });
  };

  deleteRow = () => {
    this.rowsData = _.reject(this.rowsData, ['selected', true]);
    this._saveModifications();
  }

  toggleRowSelection = (selectedRow : any) => {
    _.each(this.rowsData, function(row){
      if (row.id !== selectedRow.id) {
        row['selected'] = false;
      }
    });

    selectedRow['selected'] = !selectedRow['selected'];
  }

  sortRowBy = (prop: string) => {
    this.currentSortedRule = prop;

    let reformatProp = prop.replace(/ /g, '_').toLowerCase();

    this.rowsData = _.orderBy(this.rowsData, [reformatProp], [this.sortedOrder]);
    this._toggleSortOrder();
  };

  _saveModifications = () => {
    this.rowsData = Object.assign([], this.rowsData);
    _.each(this.rowsData, function(row) {
      delete row['selected'];
    });

    localStorage.setItem('data', JSON.stringify(this.rowsData));
  }

  _toggleSortOrder = () => this.sortedOrder == 'asc' ? this.sortedOrder = 'desc' : this.sortedOrder = 'asc';

  _initAllRowsWithFields = () => {
    let allPropsArray = [];

    _.each(this.rowsData, function(row) {
      _.each(row, function(val, key) {
        if (allPropsArray.indexOf(key) < 0) {
            allPropsArray.push(key);
        }
      });
    });

    this.rowsData.map(function(row) {
      _.each(allPropsArray, function(prop) {
        if (row[prop] === undefined) {
            row[prop] = '';
        }
      });

      return row;
    });
  }

  _mapColumnTitles = () => {
    let self = this;

    _.each(this.rowsData[0], function(val, key) {
        self.columnTitles.push(self._formatColumnTitle(key));
    });

    this.totalNumberOfRows = this.columnTitles.length;

    this.columnWidthStyle = {
      'width': `calc(100% / ${ this.totalNumberOfRows })`
    };
  };

  _formatColumnTitle = (title) => {
    let formatedTitle = title;
    formatedTitle = formatedTitle.replace(formatedTitle[0], formatedTitle[0].toUpperCase());

    while(formatedTitle.indexOf('_') > 0) {
      formatedTitle = formatedTitle.replace('_', ' ');
      let spaceIndex = formatedTitle.lastIndexOf(' ');
      formatedTitle = formatedTitle.replace(' ' + formatedTitle[spaceIndex + 1], ' ' + formatedTitle[spaceIndex + 1].toUpperCase());
    }

    return formatedTitle;
  };

}
