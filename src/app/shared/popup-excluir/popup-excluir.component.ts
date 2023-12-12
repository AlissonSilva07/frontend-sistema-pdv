import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-excluir',
  templateUrl: './popup-excluir.component.html',
  styleUrls: []
})
export class PopupExcluirComponent {
  faClose = faClose;

  @Input() popUpOpen: boolean = false;
  @Output() popUpClose = new EventEmitter<boolean>();

  fecharDialogo() {
    this.popUpClose.emit(false);
  }
}
