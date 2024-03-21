import { Component, OnInit, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../../../common/services/theme.service';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, ButtonModule, DividerModule, DynamicDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [DialogService],
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);
  public selectedTheme: string = 'light';
  private dialogService = inject(DialogService);
  ngOnInit(): void {}

  public toggleTheme() {
    if (this.themeService.getTheme() === 'light')
      this.themeService.setTheme('dark');
    else this.themeService.setTheme('light');
    this.selectedTheme = this.themeService.getTheme();
  }

  public openLoginDialog() {
    const ref = this.dialogService.open(LoginComponent, {
      header: 'Login',
      width: '20vw',
      height: '50vh',
      modal: true,
      breakpoints: {
        '1500px': '30vw',
        '1020px': '30vw',
        '960px': '40vw',
        '640px': '60vw',
      },
    });
  }
}
