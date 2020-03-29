import { Component, OnInit } from '@angular/core';
import { StitchService } from "../users/stitch.service";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'Covid-19 vs The World';

  constructor(private stitchService: StitchService) {}

  ngOnInit(): void {
    this.stitchService.loginToView();
  }
}
