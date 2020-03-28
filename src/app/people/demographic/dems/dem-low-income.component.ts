import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-low-income.component.html'
})
export class DemLowIncomeComponent implements DemComponent {
  @Input() data: any;
}
