import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-tourism.component.html'
})
export class DemTourismComponent implements DemComponent {
  @Input() data: any;
}
