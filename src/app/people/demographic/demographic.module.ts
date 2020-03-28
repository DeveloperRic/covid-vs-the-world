import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemDirective } from './dem.directive';
import { DemographicComponent } from './demographic.component';
import { DemHourlyComponent } from './dems/dem-hourly.component';
import { DemLowIncomeComponent } from './dems/dem-low-income.component';
import { DemElderlyComponent } from './dems/dem-elderly.component';
import { DemStudentsComponent } from './dems/dem-students.component';
import { DemSmallBusinessComponent } from './dems/dem-small-business.component';

@NgModule({
  declarations: [
    DemographicComponent,
    DemDirective,
    DemHourlyComponent,
    DemLowIncomeComponent,
    DemElderlyComponent,
    DemStudentsComponent,
    DemSmallBusinessComponent
  ],
  imports: [CommonModule],
  exports: [
    DemographicComponent,
    DemDirective,
    DemHourlyComponent,
    DemLowIncomeComponent,
    DemElderlyComponent,
    DemStudentsComponent,
    DemSmallBusinessComponent
  ]
})
export class DemographicModule { }
