import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep-dir',
  templateUrl: 'deep.comp.html',
  styleUrls: ['./deep.comp.css']
})

export class DirDeepComponent implements OnInit {

  bgColor: string = null;

  constructor() { }

  ngOnInit() { }
}