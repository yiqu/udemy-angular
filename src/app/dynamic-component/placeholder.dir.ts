import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[userPlaceHolder]' })
export class UserPlaceHolderDirective {

  constructor(public vcr: ViewContainerRef) { }
}
