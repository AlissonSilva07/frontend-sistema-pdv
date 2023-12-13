import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: []
})
export class MainButtonComponent {
  @Input() textoExibir = "";
  @Input() bgCor = "";
  @Input() textoCor = "";
  @Input() borda = "";
}
