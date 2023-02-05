import { Injectable } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor(private darkMode: DarkModeService) { }

  darkMode$ = this.darkMode.darkMode$;
}
