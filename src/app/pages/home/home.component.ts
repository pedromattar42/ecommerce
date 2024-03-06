import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../shared/components/organism/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { CATEGORIES_DATA, PRODUCTS_DATA, RESPONSIVE_OPTIONS, SMARTPHONES_DATA } from './helper';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselModule, DividerModule, CardModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public responsiveOptions: any[] = RESPONSIVE_OPTIONS;
  public products: any[] = PRODUCTS_DATA
  public smartPhones: any[] = SMARTPHONES_DATA
  public categories: any[] = CATEGORIES_DATA

  ngOnInit(): void {
  }
}
