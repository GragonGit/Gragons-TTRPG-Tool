import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@ui/icon/icon.component';
import { ImprintContentService } from '../data-access/imprint-content.service';

@Component({
  selector: 'ttrpg-imprint',
  standalone: true,
  imports: [
    IconComponent,

    RouterModule,
    TranslateModule
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.sass'
})
export class ImprintComponent {
  readonly imprintData = this.imprintService.imprintData

  constructor(private imprintService: ImprintContentService) { }
}
