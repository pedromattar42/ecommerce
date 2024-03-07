import { Component, OnInit, inject } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ThemeService } from '../../../../common/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService)
  public selectedTheme: string = "light"

  ngOnInit(): void {
  }

  public toggleTheme() {
    if(this.themeService.getTheme() === "light")
      this.themeService.setTheme("dark")
    else
      this.themeService.setTheme("light")
    this.selectedTheme = this.themeService.getTheme()
  }
}
