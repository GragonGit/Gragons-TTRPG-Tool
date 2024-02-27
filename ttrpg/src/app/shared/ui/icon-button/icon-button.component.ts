import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'ttrpg-icon-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.sass'
})
export class IconButtonComponent {
  @Input({ required: true }) iconName: string = ''
  @Output() ttrpgClick = new EventEmitter<void>()

  onClick(): void {
    this.ttrpgClick.emit()
  }
}
