import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { }
  back_nav = "Home"

  ngOnInit(): void {
    this.titleService.setTitle("People | covid-vs-the-world");
  }

  goBack() {
    this.router.navigate(["/"]);
  }


}
