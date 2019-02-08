import {Directive, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const checkedLi = this.el.nativeElement;
    this.renderer.setStyle(checkedLi, 'list-style-image', 'url(/assets/check-circle.png)');
    this.renderer.setStyle(checkedLi, 'background', 'red');
  }
}
