import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [],
  templateUrl: './numbers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPageComponent { }
