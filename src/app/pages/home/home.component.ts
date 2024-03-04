import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/organism/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { PRODUCTS_DATA, RESPONSIVE_OPTIONS } from './helper';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselModule, DividerModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public responsiveOptions: any[] = RESPONSIVE_OPTIONS;
  public products: any[] = PRODUCTS_DATA

  ngOnInit(): void {
  }
}
