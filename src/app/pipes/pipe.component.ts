import { Component, OnInit } from '@angular/core';

export class ListItem {
  constructor(public id: string, public display: string, public createddate: number) {
  }
}

@Component({
  selector: 'app-p-pipe',
  templateUrl: 'pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipePracComponent implements OnInit {

  myList: ListItem[] = [];
  filterShowOption: string;
  filterValue: string;

  constructor() {
    this.myList.push(
      new ListItem("111", "Apple", new Date(2020, 4, 1).getTime()),
      new ListItem("112", "Orange", new Date(2020, 4, 2).getTime()),
      new ListItem("113", "Pear", new Date(2020, 4, 3).getTime()),
      new ListItem("114", "Pineapple", new Date(2020, 4, 4).getTime()),
      new ListItem("115", "Banana", new Date(2020, 4, 5).getTime()),
      new ListItem("116", "Peach", new Date(2020, 4, 6).getTime()),
      new ListItem("117", "Mango", new Date(2020, 4, 7).getTime()),
      new ListItem("118", "Grape", new Date(2020, 4, 8).getTime()),
      new ListItem("119", "Guava", new Date(2020, 4, 9).getTime()),
      new ListItem("120", "Melon", new Date(2020, 4, 10).getTime())
    )
  }

  ngOnInit() { }

  filterShow(opt: string) {
    if (opt) {
      this.filterShowOption = opt.toLowerCase();
    } else {
      this.filterShowOption = null;
    }
  }

  onFilterChange() {
  }

  onAddItem() {
    this.myList.push(
      new ListItem(""+(Math.random()*100).toFixed(0), "F"+(Math.random()*100).toFixed(0),
        new Date(2020, 4, 20).getTime())
    );
    // add this to update input val to trigger a pipe update. or change pipe to impure
    //this.filterValue = null;
  }
}
