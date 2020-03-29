import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private router: Router) { }
  back_nav = "Home"

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(["/"]);
  }


}
