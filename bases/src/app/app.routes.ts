import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonball-super/dragoball-super-page.component';
import { DragonBallPageComponent } from './pages/dragonball/dragoball-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DragonBallPageComponent
    },
    {
        path: 'dragonball-super',
        component: DragonBallSuperPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
