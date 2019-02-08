import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDatehover]'
})
export class DatehoverDirective {

  @Input()
  private date: Date;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
