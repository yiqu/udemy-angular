import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-service',
  templateUrl: 'service.comp.html',
  styleUrls: ['./service.comp.css']
})

export class ServiceComponent implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(public ss: ServicesService) {

  }

  ngOnInit() {
    this.ss.activeUsers$.subscribe((users) => {
      this.activeUsers = users;
    });
    this.ss.inactiveUsers$.subscribe((users) => {
      this.inactiveUsers = users;
    })
  }
}
