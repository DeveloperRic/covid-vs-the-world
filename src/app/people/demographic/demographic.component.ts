import { Component, Input, Output, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DemInfo } from './demInfo';
import { DemDirective } from './dem.directive';
import { DemComponent } from './dem.component';
import { DemHourlyComponent } from './dems/dem-hourly.component';
import { DemLowIncomeComponent } from './dems/dem-low-income.component';
import { DemElderlyComponent } from './dems/dem-elderly.component';
import { DemStudentsComponent } from './dems/dem-students.component';
import { DemSmallBusinessComponent } from './dems/dem-small-business.component';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class PeopleDemographicComponent implements OnInit {
  @Input() demInfo: DemInfo;
  @Output() demName: string;
  @ViewChild(DemDirective, { static: true }) demContent: DemDirective;

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver) { }
  back_nav = "People";

  ngOnInit() {
    const demInfoDefined = this.defineDemInfo();
    if (demInfoDefined) {
      this.titleService.setTitle(`covid affects ${this.demName} | covid-vs-the-world`)
      this.loadComponent();
    }
  }

  defineDemInfo() {
    const demId = this.route.snapshot.paramMap.get('demographic');
    switch (demId) {
      case "hourly_workers":
        this.demInfo = new DemInfo(DemHourlyComponent, {});
        this.demName = "Hourly Workers";
        break;

      case "low_income_families":
        this.demInfo = new DemInfo(DemLowIncomeComponent, {});
        this.demName = "Low-Income Families";
        break;

      case "elderly":
        this.demInfo = new DemInfo(DemElderlyComponent, {});
        this.demName = "Elderly";
        break;

      case "students":
        this.demInfo = new DemInfo(DemStudentsComponent, {});
        this.demName = "Students";
        break;

      case "small_businesses":
        this.demInfo = new DemInfo(DemSmallBusinessComponent, {});
        this.demName = "Small Businesses";
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
    this.router.navigate(["/", 'people']);
  }

}
