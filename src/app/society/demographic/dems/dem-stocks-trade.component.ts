import { Component, Input } from '@angular/core';
import { DemComponent } from '../dem.component';

@Component({
  templateUrl: './dem-stocks-trade.component.html'
})
export class DemStocksTradeComponent implements DemComponent {
  @Input() data: any;
}
