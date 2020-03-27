import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-inactive',
  templateUrl: 'inactive.component.html',
  styleUrls: ['./inactive.component.css']
})

export class InactiveComponent implements OnInit {

  @Input()
  u: string;

  constructor(public ss: ServicesService) { }

  ngOnInit() { }

  onClick() {
    this.ss.toggleActive(true, this.u);
  }
}
