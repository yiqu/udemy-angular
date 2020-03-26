import { Directive, ElementRef, OnInit, Renderer2, HostListener } from "@angular/core";


@Directive({
  selector: '[listenHighlight]'
})
export class ListenHighlightDirective implements OnInit {
  
  @HostListener('mouseenter') 
  onMouseOver(data: Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') 
  onMouseLeave(data: Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'initial');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'initial');
  }

  constructor(public eleRef: ElementRef, public renderer: Renderer2) {

  }

  ngOnInit() {
  }
}