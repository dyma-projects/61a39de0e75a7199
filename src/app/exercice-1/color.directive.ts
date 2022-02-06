import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener('window:keydown.ArrowLeft', ['$event']) windowArrowLeft($event: KeyboardEvent) {
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('window:keydown.ArrowRight', ['$event']) windowArrowRight($event: KeyboardEvent) {
    this.el.nativeElement.style.color = 'green';
  }

  constructor(private el: ElementRef) { }

}
