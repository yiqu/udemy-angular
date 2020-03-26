import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
  selector: '[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  
  constructor(public eleRef: ElementRef) {

  }

  ngOnInit() {
    this.eleRef.nativeElement.style.backgroundColor = "green";
    this.eleRef.nativeElement.style.color = "white";
  }
}