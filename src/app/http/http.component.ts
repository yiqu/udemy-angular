import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IsLoadingService } from './loading.service';

@Component({
  selector: 'app-h-http',
  templateUrl: 'http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpPracComponent implements OnInit, AfterViewInit {

  showLoading: boolean = true;

  constructor(public ils: IsLoadingService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }
}

export class Tweet {
  constructor(public userName: string, public content: string, public date: number = 0,
    public id: string = null) {

  }
}
