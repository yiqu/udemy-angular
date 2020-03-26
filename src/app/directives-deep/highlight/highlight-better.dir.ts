import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  constructor(public eleRef: ElementRef, public renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
  }
}