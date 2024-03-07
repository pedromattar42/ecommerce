import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {
    this.loadTheme();
  }

  getTheme(): string {
    return this.activeTheme;
  }

  setTheme(theme: string): void {
    this.activeTheme = theme;
    if (isPlatformBrowser(this.platformId)) {
      this.saveTheme(theme);
    }
    this.applyTheme(theme);
  }

  private saveTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('userTheme', theme);
    }
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('userTheme');
      if (savedTheme) {
        this.activeTheme = savedTheme;
        this.applyTheme(savedTheme);
      } else {
        this.setTheme("light")
      }
    }
  }

  private applyTheme(theme: string): void {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
}
