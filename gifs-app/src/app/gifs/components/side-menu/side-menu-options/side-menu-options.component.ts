import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';

interface MenuOption { 
  icon: string;
  label: string;
  route: string;
  sublabel: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {
  
  gifsService = inject(GifsService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      sublabel: 'Most popular gifs',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      sublabel: 'Find your favorite gifs',
    }
  ];
}
