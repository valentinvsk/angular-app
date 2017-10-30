import { Component, OnInit, Input } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.less']
})
export class DataChartComponent implements OnInit {

  @Input() chartData: any[] = [];
  @Input() optionFields: string[] = [];

  options: any;
  data: any[];

  constructor() { }

  ngOnChanges(valuesChanged) {
    this.data = this._extractData();
  }

  ngOnInit() {
    this.options = {
      chart: {
            type: 'pieChart',
            height: 300,
            margin: {top: 50},
            x: d => d.label,
            y: d => d.value,
            showLabels: false,
            showValue: true,
            showLegend: true,
            labelThreshold: 0,
            valueFormat: d => d3.format('.0')(d),
            // donut: true,
            // donutRatio: 0.5
        }
    };

    this.data = this._extractData();
  }

  private _extactTotalNumberOfCurrentPosition = (fieldTitle: string) => this.chartData.reduce(function(startValue, item) {
      if (item.current_position == fieldTitle) {
        return startValue + 1;
      } else {
        return startValue;
      }
  }, 0);

  private _extractData = () => {
    let self = this;

    return this.optionFields.map(function(fieldTitle) {
      return {"label": fieldTitle, "value": self._extactTotalNumberOfCurrentPosition(fieldTitle)}
    });

  }

}
