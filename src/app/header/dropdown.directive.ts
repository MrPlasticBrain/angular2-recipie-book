import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') private isOpen = false;
@HostListener('click') open() {
  this.isOpen = true;
}
@HostListener('mouseleave') mouseLeave() {
  this.isOpen = false;
}
  constructor() { }

}
