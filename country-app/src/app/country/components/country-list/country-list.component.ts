import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent { }
