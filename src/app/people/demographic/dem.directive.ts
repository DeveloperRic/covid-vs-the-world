import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dem-content]',
})
export class DemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

