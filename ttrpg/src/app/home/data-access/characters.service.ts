import { Injectable } from '@angular/core';
import { Character, db } from '@data-access/database';
import { liveQuery } from 'dexie';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly charactersTable = db.characters
  charactersObservable: Observable<Character[]> = from(liveQuery<Character[]>(() => { return this.charactersTable.toArray() }))

  addNewCharacter(): void {
    this.charactersTable.add({ fileName: "New" })
  }
}
