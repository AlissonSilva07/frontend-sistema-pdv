import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-incluir',
  templateUrl: './popup-incluir.component.html',
  styleUrls: []
})
export class PopupIncluirComponent {
  faClose = faClose;

  @Input() popUpIncluirOpen: boolean = false;
  @Output() popUpIncluirClose = new EventEmitter<boolean>();

  fecharDialogoIncluir() {
    this.popUpIncluirClose.emit(false);
  }
}
