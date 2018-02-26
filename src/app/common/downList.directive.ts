import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[showDownList]'
})
export class DownListDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("none");
  }

  private highlight(display: string) {
    this.el.nativeElement.style.display = display;
  }
}