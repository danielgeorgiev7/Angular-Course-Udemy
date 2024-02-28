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

// For dropdown closing when click outside of element (lecturer solution):

// @Directive({
//   selector: '[appDropdown]',
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target)
//       ? !this.isOpen
//       : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }
