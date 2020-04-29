import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: 'animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger("listItemState", [
      state("normal", style({
        'background-color': "cyan",
        'transform': 'translateX(0)'
      })),
      state("right-yellow", style({
        'background-color': "yellow",
        'transform': 'translateX(100px)'
      })),
      state("right-1", style({
        'background-color': "green",
        'transform': 'translateX(200px)'
      })),
      transition("normal <=> right-yellow", animate("1s")),
      transition("normal <=> right-1", animate("1s")),
      transition("right-yellow <=> right-1", animate("1s"))
    ])
  ]
})
export class AnimationPracComponent implements OnInit {

  myList: ListItem[] = [];

  listItemState: string = "normal";

  constructor() {
    this.myList.push(
      new ListItem("Folder", "folder"),
      new ListItem("Folder", "folder"),
      new ListItem("Folder", "folder"),
    )
  }

  ngOnInit() {

  }

  onAnimate(dir: string) {
    if (dir === "right") {
      this.listItemState = "right-yellow";
    } else if (dir === 'normal') {
      this.listItemState = "normal";
    } else if (dir === 'right-1') {
      this.listItemState = "right-1";
    }

    console.log(this.listItemState)
  }

  onitemAdd() {
    this.myList.push(new ListItem("Folder new" + (Math.random() * 100).toFixed(0), "folder"));
  }
}

export class ListItem {
  constructor(public display: string, public icon: string) {

  }
}
