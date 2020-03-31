import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-war',
  templateUrl: 'war.component.html',
  styleUrls: ['./war.component.css', '../routing.component.css']
})

export class WarComponent implements OnInit {

  listOfIds: any[] = [1,2,3];

  constructor() { }

  ngOnInit() { }
}
