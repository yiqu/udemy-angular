import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-priest',
  templateUrl: 'priest.component.html',
  styleUrls: ['./priest.component.css', '../routing.component.css']
})

export class PriestComponent implements OnInit {

  listOfIds: any[] = [];

  constructor() {
    this.listOfIds.push(...[1,2,3,4,5]);
  }

  ngOnInit() { }
}
