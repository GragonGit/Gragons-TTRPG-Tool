import { Injectable } from '@angular/core';
import { Character, db } from '@data-access/database';
import { TranslateService } from '@ngx-translate/core';
import { liveQuery } from 'dexie';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly charactersTable = db.characters
  charactersObservable: Observable<Character[]> = from(liveQuery<Character[]>(() => { return this.charactersTable.toArray() }))

  constructor(private translateService: TranslateService) { }

  addNewCharacter(): void {
    this.translateService.get('HOME.DA.newCharacter').subscribe((newCharacter: string) => {
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
