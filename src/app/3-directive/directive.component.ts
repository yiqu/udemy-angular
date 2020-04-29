import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p3-dir',
  templateUrl: 'directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {

  showDetails: boolean = false;
  clickDetails: Detail[] = [];
  count: number = 0;

  constructor() {

  }

  ngOnInit() {

  }

  onClick() {
    this.showDetails = !this.showDetails;
    this.clickDetails.push(new Detail(this.count++, new Date()));
  }
}

class Detail {
  constructor(public name: number, public time: any) {

  }
}