import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-user-dynamic',
  templateUrl: 'new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserDynamicComponent implements OnInit {


  @Input()
  data: any;

  @Output()
  alertOnUser: EventEmitter<string> = new EventEmitter<string>();


  constructor() {

  }

  ngOnInit() {

  }

  onAlertClick() {
    if (this.data['name'])
    this.alertOnUser.emit(this.data['name']);
  }
}
