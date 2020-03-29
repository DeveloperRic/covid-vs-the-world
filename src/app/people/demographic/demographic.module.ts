import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemDirective } from './dem.directive';
import { PeopleDemographicComponent } from './demographic.component';
import { DemHourlyComponent } from './dems/dem-hourly.component';
import { DemLowIncomeComponent } from './dems/dem-low-income.component';
import { DemElderlyComponent } from './dems/dem-elderly.component';
import { DemStudentsComponent } from './dems/dem-students.component';
import { DemSmallBusinessComponent } from './dems/dem-small-business.component';

@NgModule({
  declarations: [
    PeopleDemographicComponent,
    DemDirective,
    DemHourlyComponent,
    DemLowIncomeComponent,
    DemElderlyComponent,
    DemStudentsComponent,
    DemSmallBusinessComponent
  ],
  imports: [CommonModule],
  exports: [
    PeopleDemographicComponent,
    DemDirective,
    DemHourlyComponent,
    DemLowIncomeComponent,
    DemElderlyComponent,
    DemStudentsComponent,
    DemSmallBusinessComponent
  ]
})
export class PeopleDemographicModule { }
