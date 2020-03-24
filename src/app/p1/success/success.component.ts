import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1-success',
  templateUrl: 'success.component.html',
  styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit {

  message: string = "I am a success message";

  constructor() {
    
  }

  ngOnInit() { }
}