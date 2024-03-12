import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'ttrpg-settings-item',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './settings-item.component.html',
  styleUrl: './settings-item.component.sass'
})
export class SettingsItemComponent {
  @Input({ required: true }) iconName: string = ''
  @Input({ required: true }) text: string = ''

  @Output() ttrpgClick = new EventEmitter<void>()

  onClick(): void {
    this.ttrpgClick.emit()
  }
}
