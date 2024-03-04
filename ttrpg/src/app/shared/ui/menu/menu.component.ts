import { Component, Input } from '@angular/core';
import { IconButtonComponent } from '@ui/icon-button/icon-button.component';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'ttrpg-menu',
  standalone: true,
  imports: [
    IconComponent,
    IconButtonComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
  @Input({ required: true }) menuIcon: string = ''
  @Input({ required: true }) menuItems: { text?: string, iconName?: string }[] = []

  isOpen: boolean = false

  onMenuButtonClick(): void {
    this.isOpen = !this.isOpen
  }
}
