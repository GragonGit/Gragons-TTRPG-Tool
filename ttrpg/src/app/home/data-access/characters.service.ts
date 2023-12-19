import { Injectable } from '@angular/core';
import { Character, db } from '@data-access/database';
import { liveQuery } from 'dexie';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  charactersObservable: Observable<Character[]> = from(liveQuery<Character[]>(() => { return db.characters.toArray() }))
}
