import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';

const DEFAULT_THEME = 'light'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = this.getTheme() ?? DEFAULT_THEME

  setTheme(theme: string): void {
    document.getElementById('mainBody')?.classList.remove(this.currentTheme)
    document.getElementById('mainBody')?.classList.add(theme)
    this.currentTheme = theme
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme)
  }

  getTheme(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.THEME)
  }

  getDefaultTheme(): string {
    return DEFAULT_THEME
  }
}
