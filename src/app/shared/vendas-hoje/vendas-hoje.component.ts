import { Component } from '@angular/core';

import { faDollarSign, faSheetPlastic, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendas-hoje',
  templateUrl: './vendas-hoje.component.html',
  styleUrls: []
})
export class VendasHojeComponent {
  faDollarSign = faDollarSign;
  faSheetPlastic = faSheetPlastic;
  faTag = faTag;
}
