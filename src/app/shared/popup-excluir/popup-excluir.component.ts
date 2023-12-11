import { Component, Input } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-excluir',
  templateUrl: './popup-excluir.component.html',
  styleUrls: []
})
export class PopupExcluirComponent {
  faClose = faClose;

  @Input() popUp: boolean = false;
}
