import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Character } from '@data-access/character';
import { db } from '@data-access/database';
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
    const newCharacterName = toSignal<string>(this.translateService.get('HOME.DATA_ACCESS.newCharacter'))
    this.charactersTable.add({ fileName: newCharacterName() ?? 'New Character' })
  }

  deleteCharacter(character: Character): void {
    if (character.id) {
      this.charactersTable.delete(character.id)
    }
  }

  updateCharacter(key: Character, changes: Partial<Character>): void {
    this.charactersTable.update(key, changes)
  }
}
