import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'Covid-19 vs The World';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Covid-19 vs The World");
  }
}
