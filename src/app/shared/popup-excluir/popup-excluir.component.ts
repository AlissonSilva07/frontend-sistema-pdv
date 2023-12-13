import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-excluir',
  templateUrl: './popup-excluir.component.html',
  styleUrls: []
})
export class PopupExcluirComponent {
  faClose = faClose;

  @Input() popUpExcluirOpen: boolean = false;
  @Output() popUpExcluirClose = new EventEmitter<boolean>();

  fecharDialogo() {
    this.popUpExcluirClose.emit(false);
  }
}
