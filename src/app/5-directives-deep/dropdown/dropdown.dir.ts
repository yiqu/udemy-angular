import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Host, Input } from "@angular/core";


@Directive({
  selector: '[dropDown]'
})
export class DropDownDirective implements OnInit {

  @Input()
  get dropDown(): boolean {
    return this.showing;
  };

  @HostBinding('class.show')
  @HostBinding('class.show2')
  @HostBinding('class.show3')
  showing: boolean;

  set dropDown(val) {
    this.showing = val;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log()
    if(this.eleRef.nativeElement.contains(event.target)) {
      console.log("clicked in")
    } else {
      console.log("clicked out")
    }
  }


  constructor(public eleRef: ElementRef, public renderer: Renderer2) {
  }

  ngOnInit() {
  }
}
