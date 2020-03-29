import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  constructor(private router : Router) { }
  back_nav = "Home"

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(["/"]);
  }

}
