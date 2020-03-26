import { Directive, ElementRef, OnInit, HostBinding, HostListener } from "@angular/core";


@Directive({
  selector: '[bindingHighlight]'
})
export class BindingHighlightDirective implements OnInit {

  set validClass(boo: boolean) {
    console.log("setting it to green!")
    this.isValid = boo;
  }
  
  @HostBinding("class.valid") 
  isValid: boolean;

  @HostListener("mouseenter", ['$event']) 
  onMouseEnter(e: Event) {
    console.log(e)
    this.validClass = true;
  }

  @HostListener("mouseleave") 
  onMouseLeave() {
    this.validClass = false;
  }

  constructor(public eleRef: ElementRef) {

  }

  ngOnInit() {
  }
}