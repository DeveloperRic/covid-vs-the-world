import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemDirective } from './dem.directive';
import { SocietyDemographicComponent } from './demographic.component';
import { DemEnvironmentComponent } from './dems/dem-environment.component';
import { DemCountriesComponent } from './dems/dem-countries.component';
import { DemTourismComponent } from './dems/dem-tourism.component';
import { DemStocksTradeComponent } from './dems/dem-stocks-trade.component';

@NgModule({
  declarations: [
    SocietyDemographicComponent,
    DemDirective,
    DemEnvironmentComponent,
    DemCountriesComponent,
    DemTourismComponent,
    DemStocksTradeComponent
  ],
  imports: [CommonModule],
  exports: [
    SocietyDemographicComponent,
    DemDirective,
    DemEnvironmentComponent,
    DemCountriesComponent,
    DemTourismComponent,
    DemStocksTradeComponent
  ]
})
export class SocietyDemographicModule { }
