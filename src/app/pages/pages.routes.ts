import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const PAGES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    }
];


export default PAGES_ROUTES