import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener, HostBinding } from "@angular/core";


@Directive({
  selector: '[customHighlight]'
})
export class CustomHighlightDirective implements OnInit {
  
  @Input('customHighlight')
  highLight: string;

  @Input()
  defaultColor: string;

  @HostBinding("style.backgroundColor") 
  color: string;
  
  @HostListener('mouseenter') 
  onMouseOver(data: Event){
    this.color = this.highLight ? this.highLight : this.defaultColor;
  }

  @HostListener('mouseleave') 
  onMouseLeave(data: Event){
    this.color = this.defaultColor;
  }

  constructor(public eleRef: ElementRef, public renderer: Renderer2) {

  }

  ngOnInit() {
    this.color = this.defaultColor;
  }
}