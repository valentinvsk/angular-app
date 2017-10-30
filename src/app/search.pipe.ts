import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], text: string): any {
    if (!array)  {
      return [];

    } else if (_.isEmpty(text)){
      return array;

    } else {
      return array.filter(function(item) {
          let itemFound = {};

          _.each(item, function(val) {
              if (val != null && val != undefined && val.toString().toLowerCase().indexOf(text.toLowerCase().trim()) >= 0) {
                itemFound = item;
                return false;
              }
          });

          return !_.isEmpty(itemFound) ? true : false;
        });
    }

  }

}
