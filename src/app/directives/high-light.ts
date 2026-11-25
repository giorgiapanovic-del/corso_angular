import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLight {
  @Input() appHighLight = '';
  @Input() defaultColor = '';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appHighLight);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore(this.defaultColor);
  }

  private cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }
}
