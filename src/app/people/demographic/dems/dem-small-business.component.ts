import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';


@Component({
  templateUrl: './dem-small-business.component.html'
})
export class DemSmallBusinessComponent implements DemComponent {
  @Input() data: any;
}
