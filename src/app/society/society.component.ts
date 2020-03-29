import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { }
  back_nav = "Home"

  ngOnInit(): void {
    this.titleService.setTitle("Society | covid-vs-the-world");
  }

  goBack() {
    this.router.navigate(["/"]);
  }

}
