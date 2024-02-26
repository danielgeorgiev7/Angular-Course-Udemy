import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //My solution
  //   isOpen: boolean = false;
  //   constructor(private elementRef: ElementRef) {}
  //   @HostListener('click') onDropdownClick() {
  //     this.isOpen = !this.isOpen;
  //     if (this.isOpen) {
  //       this.elementRef.nativeElement.classList.add('open');
  //     } else {
  //       this.elementRef.nativeElement.classList.remove('open');
  //     }
  //   }
  // Lecturer
  @HostBinding('class.open') isOpen = false; // Bind class to isOpen

  @HostListener('click') onDropdownClick() {
    this.isOpen = !this.isOpen;
  }
}
