import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    IconComponent,

    TranslateModule
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.sass'
})
export class ImprintComponent {

}
