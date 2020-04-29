import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'dateDisplay',
  pure: true
})
export class DateDisplayPipe implements PipeTransform {
  transform(value: number): any {
    return moment(value).fromNow();
  }
}
