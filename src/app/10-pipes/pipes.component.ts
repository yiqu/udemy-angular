import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ListItem } from './pipe.component';

@Pipe({
  name: 'listItemDisplay',
  pure: true
})
export class ListItemDisplayPipe implements PipeTransform {
  constructor(private dp: DatePipe) {
  }

  transform(value: any, showOption: string): any {
    if (!showOption || showOption === "ALL") {
      return "Name: " + value['display'] + " | ID: " + value['id'] + " | Date: " +
        this.dp.transform(value['createddate'], 'medium');
    }
    else if (showOption === 'createddate') {
      return showOption.toUpperCase() + ": " + this.dp.transform(value[showOption], 'EEEE, MMMM d, y, h:mm:ss a zzzz');
    }
    else {
      return showOption.toUpperCase() + ": " + value[showOption];
    }

  }
}

@Pipe({
  name: 'listItemFilterDisplay',
  pure: true
})
export class ListItemFilterDisplayPipe implements PipeTransform {

  transform(value: ListItem[], filterValue: string): any[] {
    if (filterValue) {
      const sanVal = filterValue.toLowerCase().trim();
      return value.filter((val: ListItem) => {
        if (val.display.toLowerCase().includes(sanVal) || val.id.includes(sanVal)) {
          return true;
        }
      });
    }

    return value;
  }
}
