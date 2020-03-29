import { Component, Input, Output, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DemInfo } from './demInfo';
import { DemDirective } from './dem.directive';
import { DemComponent } from './dem.component';
import { DemEnvironmentComponent } from './dems/dem-environment.component';
import { DemCountriesComponent } from './dems/dem-countries.component';
import { DemTourismComponent } from './dems/dem-tourism.component';
import { DemStocksTradeComponent } from './dems/dem-stocks-trade.component';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class SocietyDemographicComponent implements OnInit {
  @Input() demInfo: DemInfo;
  @Output() demName: string;
  @ViewChild(DemDirective, { static: true }) demContent: DemDirective;
  back_nav = "Society"

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver) { }
    

  ngOnInit() {
    const demInfoDefined = this.defineDemInfo();
    if (demInfoDefined) {
      this.loadComponent();
    }
  }

  defineDemInfo() {
    const demId = this.route.snapshot.paramMap.get('demographic');
    switch (demId) {
      case "countries":
        this.demInfo = new DemInfo(DemCountriesComponent, {});
        this.demName = "Countries";
        break;

      case "environment":
        this.demInfo = new DemInfo(DemEnvironmentComponent, {});
        this.demName = "Elderly";
        break;

      case "stocks_and_trade":
        this.demInfo = new DemInfo(DemStocksTradeComponent, {});
        this.demName = "Stocks & Trade";
        break;

      case "tourism":
        this.demInfo = new DemInfo(DemTourismComponent, {});
        this.demName = "Tourism";
        break;

      default:
        this.router.navigateByUrl("/people");
        return false;
    }
    return true;
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.demInfo.component);

    const viewContainerRef = this.demContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DemComponent>componentRef.instance).data = this.demInfo.data;
  }
  goBack() {
    this.router.navigate(["/", 'society']);
  }

}
