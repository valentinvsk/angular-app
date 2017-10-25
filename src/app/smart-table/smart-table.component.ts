import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.less']
})
export class SmartTableComponent implements OnInit {

  settings = {
  columns: {
    id: {
      title:  'ID',
      filter: false
    },
    name: {
      title: 'Full Name',
      filter: false
    },
    username: {
      title: 'User Name',
      filter: false
    },
    email: {
      title: 'Email',
      filter: false
    },
    position: {
      title: 'Position',
      filter: false
    }
  }
};

data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    position: 'Assistant'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    position: 'Assistant'
  },
  {
    id: 11,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz',
    position: 'Assistant'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
