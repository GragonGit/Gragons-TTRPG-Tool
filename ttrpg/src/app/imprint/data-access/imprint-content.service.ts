import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImprintContentService {
  private readonly dataUrl = 'assets/personalData.json';
  imprintDataObservable = this.http.get<{ name: string, adress: string, email: string }>(this.dataUrl)

  constructor(private http: HttpClient) { }
}
