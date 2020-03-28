import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-countries.component.html'
})
export class DemCountriesComponent implements DemComponent {
  @Input() data: any;
}
