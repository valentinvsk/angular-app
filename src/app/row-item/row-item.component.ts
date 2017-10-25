import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: '[row-item]',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.less']
})
export class RowItemComponent implements OnInit {

  @Input() inEditMode : number = -1;
  @Input() rowItemData : any = {};
  @Input() totalNumberOfRows : number = 0;
  _listOfProps: string[] = [];
  rowWidthStyle: any = {};

  constructor() { }

  ngOnInit() {
    let self = this;

    _.each(this.rowItemData, function(val, key){
      self._listOfProps.push(key);
    });

    this.rowWidthStyle = {
      'width': `calc(100% / ${ this.totalNumberOfRows } )`
    };
  }

}
