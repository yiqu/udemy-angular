import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep-dir',
  templateUrl: 'deep.comp.html',
  styleUrls: ['./deep.comp.css']
})

export class DirDeepComponent implements OnInit {

  bgColor: string = null;
  clicked: boolean = false;
  capValue: string = null;
  mValue: string = null;
  maxCharAllowed: number = 4;

  constructor() { }

  ngOnInit() { }

  onBtnClick() {
    this.clicked = !this.clicked;
  }
}
