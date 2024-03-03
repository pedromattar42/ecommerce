import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const PAGES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    }
];


export default PAGES_ROUTES