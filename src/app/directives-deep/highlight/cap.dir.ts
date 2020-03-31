import { Directive, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[capitalizeDir]'
})
export class CapitalizeDirective {
  @Output()
  ngModelChange: EventEmitter<any> = new EventEmitter();

  @HostListener('input' , ['$event'])
  onKeyDown(eve) {
    this.ngModelChange.emit(eve.target.value.toUpperCase());
  }

  constructor(public eleRef: ElementRef) {

  }
}


@Directive({
  selector: '[maxValue]'
})
export class MaxCharDirective {
  @Output()
  ngModelChange: EventEmitter<any> = new EventEmitter();

  @Input()
  maxValue: number = -1;

  @HostListener('input' , ['$event'])
  onKeyDown(eve) {
    if (this.maxValue) {
      this.ngModelChange.emit(this.eleRef.nativeElement.value.slice(0, +this.maxValue));
      this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.slice(0, +this.maxValue);
    }
  }

  constructor(public eleRef: ElementRef) {

  }
}
