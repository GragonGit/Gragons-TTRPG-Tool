import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@ui/icon/icon.component';
import { ImprintContentService } from '../data-access/imprint-content.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    IconComponent,

    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.sass'
})
export class ImprintComponent {
  imprintData: { name: string, adress: string, email: string } = { name: "", adress: "", email: "" }

  ngOnInit() {
    this.imprintService.imprintDataObservable.subscribe((result) => {
      this.imprintData = result;
    })
  }

  constructor(private imprintService: ImprintContentService) { }
}
