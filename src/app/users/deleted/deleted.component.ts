import { Component, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class LoginDeletedComponent implements OnInit {
  title = "Account deleted | covid-vs-the-world";
  horzSpinner = "<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>";
  @Output() secondsLeft: number;
  private interval;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.secondsLeft = 5;
    this.interval = setInterval(() => {
      if (--this.secondsLeft <= 0) {
        clearInterval(this.interval);
        this.router.navigateByUrl("/");
      }
    }, 1000);
  }

}
