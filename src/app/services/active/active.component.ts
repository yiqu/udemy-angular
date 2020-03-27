import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-active',
  templateUrl: 'active.component.html',
  styleUrls: ['./active.component.css']
})

export class ActiveComponent implements OnInit {

  @Input()
  u: string;

  constructor(public ss: ServicesService) {

  }

  ngOnInit() { }

  onClick() {
    this.ss.toggleActive(false, this.u);
  }
}
