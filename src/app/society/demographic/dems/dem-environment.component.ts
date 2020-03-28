import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-environment.component.html'
})
export class DemEnvironmentComponent implements DemComponent {
  @Input() data: any;
}
