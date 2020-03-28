import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-elderly.component.html'
})
export class DemElderlyComponent implements DemComponent {
  @Input() data: any;
}
