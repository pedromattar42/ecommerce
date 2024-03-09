import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
