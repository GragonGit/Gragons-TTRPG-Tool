import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Character } from '@data-access/character';
import { db } from '@data-access/database';
import { TranslateService } from '@ngx-translate/core';
import { liveQuery } from 'dexie';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly charactersTable = db.characters
  readonly characters: Signal<Character[] | undefined> = toSignal(liveQuery(() => { return this.charactersTable.toArray() }))

  constructor(private translateService: TranslateService) { }

  addNewCharacter(): void {
    this.translateService.get('HOME.DATA_ACCESS.newCharacter')
      .pipe(first())
      .subscribe((newCharacterName) => this.charactersTable.add({ fileName: newCharacterName }))
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
