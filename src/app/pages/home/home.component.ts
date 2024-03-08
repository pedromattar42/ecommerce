import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../shared/components/organism/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { CATEGORIES_DATA, ESSENTIALS_DATA, OFFERS_DATA, PRODUCTS_DATA, RESPONSIVE_OPTIONS, SMARTPHONES_DATA } from './helper';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FooterComponent } from '../../shared/components/organism/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselModule, DividerModule, CardModule, FooterComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public responsiveOptions: any[] = RESPONSIVE_OPTIONS;
  public products: any[] = PRODUCTS_DATA
  public smartPhones: any[] = SMARTPHONES_DATA
  public categories: any[] = CATEGORIES_DATA
  public offersData: any[] = OFFERS_DATA
  public essentialsData: any[] = ESSENTIALS_DATA

  ngOnInit(): void {
  }
}
