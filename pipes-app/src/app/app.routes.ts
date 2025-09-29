import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Pipes - basic',
        loadComponent: () => import('./pages/basic-page/basic-page.component')
    },
    {
        path: 'numbers',
        title: 'Pipes - numbers',
        loadComponent: () => import('./pages/numbers-page/numbers-page.component')
    },
    {
        path: 'uncommon',
        title: 'Pipes - uncommon',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
    },
    {
        path: 'custom',
        title: 'Pipes - custom  ',
        loadComponent: () => import('./pages/custom-page/custom-page.component')
    },
    {
        path: '**',
        redirectTo: 'basic'
    }
];
