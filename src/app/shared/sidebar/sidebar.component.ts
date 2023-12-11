import { Component } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faHouse = faHouse;
  faMoneyBillWave = faMoneyBillWave;
  faCartShopping = faCartShopping;
  faProductHunt = faProductHunt;
  faChevronDown = faChevronDown;

  subMenuProdutosIsOpen: boolean = false;

  toggleSubMenuProdutos() {
    this.subMenuProdutosIsOpen = !this.subMenuProdutosIsOpen;
  }

  fecharSubMenuProdutos() {
    this.subMenuProdutosIsOpen = false;
  }
}
