import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-http',
  templateUrl: 'http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpPracComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }
}

export class Tweet {
  constructor(public userName: string, public content: string) {

  }
}
