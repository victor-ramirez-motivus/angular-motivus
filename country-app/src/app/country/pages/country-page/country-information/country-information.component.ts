import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();

  currentYear = computed(() => {
    return new Date().getFullYear();
  });
}
