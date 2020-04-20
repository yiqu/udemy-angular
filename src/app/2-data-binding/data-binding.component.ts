import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  userName: string = "Bob";

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.userName = "";
  }
}