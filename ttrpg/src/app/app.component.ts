import { Component } from '@angular/core';
import { invoke } from '@tauri-apps/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ttrpg';

  ngOnInit() {
    invoke('greet', { name: 'Welt' }).then((response) => console.log(response))
  }
}
