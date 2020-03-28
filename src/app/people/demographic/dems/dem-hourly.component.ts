import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-hourly.component.html'
})
export class DemHourlyComponent implements DemComponent {
  @Input() data: any;
}
