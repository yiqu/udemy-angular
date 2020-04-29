import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rubberBandAnimation,
  rotateInDownLeftOnEnterAnimation,
  rollInAnimation,
  zoomInLeftAnimation,
  zoomInDownOnEnterAnimation,
  hueRotateAnimation,
  zoomInUpOnEnterAnimation,
  flashAnimation,
  rubberBandOnEnterAnimation } from 'angular-animations';

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
    ]),


    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    rubberBandAnimation(),
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
    zoomInDownOnEnterAnimation({ anchor: 'enterLetterAnim1' }),
    fadeInOnEnterAnimation({ anchor: 'enterLetterAnim2' }),
    zoomInUpOnEnterAnimation({ anchor: 'enterLetterAnim3' }),
    rollInAnimation({ anchor: 'letterAnim1' }),
    zoomInLeftAnimation({ anchor: 'letterAnim2' }),
    rubberBandAnimation({ anchor: 'letterAnim3' }),
    hueRotateAnimation({ anchor: 'hueLetter', duration: 5000 }),
    flashAnimation({ anchor: 'flash' }),
    rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 12500 }),
    fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 12500, duration: 500 }),


  ]
})
export class AnimationPracComponent implements OnInit {

  myList: ListItem[] = [];

  listItemState: string = "normal";
  rubberState: boolean = false;

  coolTxts: string[]  =
    "Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much .".split("");

  animationState = false;
  hueState = false;
  flashState = false;

  reset: boolean = false;

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

  onRubber() {
    this.rubberState = true;
    setTimeout((val)=>{
      this.rubberState = false;
    },1)
  }

  onitemAdd() {
    this.myList.push(new ListItem("Folder new" + (Math.random() * 100).toFixed(0), "folder"));
  }

  removeMe(i: number) {
    this.myList.splice(i, 1)
  }

  getDelay(index, lenght) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  reStartcool() {
    this.reset = !this.reset;
    this.animationState = this.reset;
    this.hueState =this.reset;
    this.flashState = this.reset;
  }

  onAniDone(e) {
    //console.log(e)
    this.hueState = !this.hueState
  }

}

export class ListItem {
  constructor(public display: string, public icon: string) {

  }
}
