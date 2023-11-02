import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appModifier]'
})
export class ModifierDirective {
  @Input() name?: string;

  constructor(private elementRef:ElementRef) {
    console.log(elementRef);
    this.elementRef.nativeElement.style.color = "red";

  }
  @HostListener('click')
  onClick() {
    this.elementRef.nativeElement.style.color = "blue";
    this.elementRef.nativeElement.innerText = this.name;
  }

}
