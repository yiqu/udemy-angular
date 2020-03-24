import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1-warning',
  templateUrl: 'warning.component.html',
  styleUrls: ['./warning.component.css']
})

export class WarningComponent implements OnInit {

  message: string = "I am a warning message";

  constructor() {
    
  }

  ngOnInit() { }
}