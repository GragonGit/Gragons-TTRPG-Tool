import { Injectable } from '@angular/core';
import { imprintData } from "./personalData";

@Injectable({
  providedIn: 'root'
})
export class ImprintContentService {
  imprintData = imprintData
}
