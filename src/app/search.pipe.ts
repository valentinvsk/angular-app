import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], text?: string): any {
    console.log(array, ' -->> ', text);
    if (array.length == 0) {
      return [];
    } else {

      return array.filter(function(item) {
        let itemFound = {};
        _.each(item, function(val) {
            if(val.toString().toLowerCase().indexOf(text.toLowerCase().trim()) >= 0){
              itemFound = item;
              return false;
            }
        });

        return !_.isEmpty(itemFound) ? true : false;
      });
    }

  }

}
