import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-students.component.html'
})
export class DemStudentsComponent implements DemComponent {
  @Input() data: any;
}
