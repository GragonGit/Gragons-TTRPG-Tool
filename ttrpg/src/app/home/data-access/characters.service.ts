import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Character, db } from '@data-access/database';
import { TranslateService } from '@ngx-translate/core';
import { liveQuery } from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly charactersTable = db.characters
  readonly characters: Signal<Character[] | undefined> = toSignal(liveQuery(() => { return this.charactersTable.toArray() }))

  constructor(private translateService: TranslateService) { }

  addNewCharacter(): void {
    this.translateService.get('HOME.DATA_ACCESS.newCharacter').subscribe((newCharacter: string) => {
      this.charactersTable.add({ fileName: newCharacter ?? 'New Character' })
    }).unsubscribe()
  }

  deleteCharacter(character: Character): void {
    if (character.id) {
      this.charactersTable.delete(character.id)
    }
  }

  updateCharacter(key: Character, changes: { [keyPath: string]: any }): void {
    this.charactersTable.update(key, changes)
  }
}
