import { Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: []
})
export class ButtonIconComponent {
  faArrowRight = faArrowRight;
  @Input() textoExibicao = "";
  @Input() cor = "";
}
