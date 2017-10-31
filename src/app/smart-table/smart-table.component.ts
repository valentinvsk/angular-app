import { Component, OnInit, Input } from '@angular/core';
// import { JsonProviderService } from '../json-provider.service';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.less']
})
export class SmartTableComponent implements OnInit {

  doughnutChartLabels:string[] = ['Passed Yes', 'Passed No'];
  doughnutChartData:number[] = [];
  doughnutChartType: string = 'pie';

  @Input() data = [
      {
        id: 4,
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        passed: 'Yes',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        passed: 'No',
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        passed: 'Yes',
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        passed: 'No',
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        passed: 'Yes',
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        email: 'Chaim_McDermott@dana.io',
        passed: 'No',
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        passed: 'No',
      },
      {
        id: 11,
        name: 'Nicholas DuBuque',
        email: 'Rey.Padberg@rosamond.biz',
        passed: 'Yes',
      },
      {
        id: 12,
        name: 'Kurtis Weissnat',
        email: 'Hoeger.Telly@billy.biz',
        passed: 'Yes',
      }
    ];

    settings = {
      delete: {
      deleteButtonContent: 'del',
      confirmDelete: true
      },
      actions: {
        columnTitle: 'Actions',
        add: true,
        edit: true,
        delete: true,
        position: 'right',
        },
        edit: {
        editButtonContent: 'edit'
        },
      columns: {
        id: {
          title: 'ID',
        },
        name: {
          title: 'Full Name',
          filter: {
            type: 'list',
            config: {
              selectText: 'Select...',
              list: [
                { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
              ],
            },
          },
        },
        email: {
          title: 'Email',
          filter: {
            type: 'completer',
            config: {
              completer: {
                data: this.data,
                searchFields: 'email',
                titleField: 'email',
              },
            },
          },
        },
        passed: {
          title: 'Passed',
          filter: {
            type: 'checkbox',
            config: {
              true: 'Yes',
              false: 'No',
              resetText: 'clear',
            },
          },
        },
      },
    };

    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
          this.data = event.source.data;
          console.log(this.data);
          this._extractNumberOfProps('passed');
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }

  private _extractNumberOfProps = (propName: string) => {
    console.log(this.data);
    const totalNumberOfYesProps = this.data.reduce((startValue, item) => {
      if (!item || !item[propName]) {
        return startValue;
      }

      if (item[propName] === 'Yes') {
        return startValue + 1;
      } else if (item[propName] === 'No'){
        return startValue;
      }
    }, 0);

    const totalNumberOfNoProps = this.data.length - totalNumberOfYesProps;
    this.doughnutChartData = Object.assign([], [totalNumberOfYesProps, totalNumberOfNoProps]);
  }

  chartClicked(e: any): void {
    console.log(e);
  }
  chartHovered(e:any):void {
    console.log(e);
  };



  // constructor(private _jsonProvider?: JsonProviderService) { }
  // ngOnChanges(changes : any[]) {
  //   console.log(changes);
  // }

  // onDelete(event) {
  // console.log('on delete');
  // // delete data from server
  // this.delete(event.data).then(result => {
  // if (result === true) {
  // // if data successfully deleted from server, remove data from local table too
  // this.source.remove(event.data);
  // }
  // }).catch(err => console.log(err));
  // }

  whenDelete(event) {
    this.data.splice(this.data.indexOf(event.data), 1);
    console.log(this.data);
  }

  ngOnInit() {
    // this._jsonProvider.getDataForChart().subscribe(result => {console.log(result); this.doughnutChartData = result.data});
    this._extractNumberOfProps('passed');
    let self = this;
    setInterval(() => {this._extractNumberOfProps('passed'); }, 2000);
  }

}
