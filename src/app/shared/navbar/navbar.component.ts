import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faChevronDown = faChevronDown;
  faXmark = faXmark;

  menuContextoIsOpen: boolean = false;

  toggleMenuContexto() {
    this.menuContextoIsOpen = !this.menuContextoIsOpen;
  }
}
