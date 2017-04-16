import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    // Use HostBinding to attach to the class attribute and in particular the 'open' class. So initially the open class will not be attached and whenever isOpen switches to true it will be. Open is a built in bootstrap class for dropdowns.
    @HostBinding('class.open') isOpen = false;

    // Listen for the click event and call method toggleOpen whenever is clicked.
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}