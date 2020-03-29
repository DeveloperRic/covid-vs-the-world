import { Component, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { StitchService } from '../stitch.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class LoginDeletedComponent implements OnInit {
  title = "Account deleted | covid-vs-the-world";
  horzSpinner = "<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>";
  @Output() deleted: boolean;
  @Output() secondsLeft: number;
  private interval;

  constructor(
    private router: Router,
    private stitchService: StitchService
  ) { }

  ngOnInit(): void {
    this.stitchService.deleteAccount()
      .then(() => {
        this.deleted = true;
        this.secondsLeft = 5;
        this.interval = setInterval(() => {
          if (--this.secondsLeft <= 0) {
            clearInterval(this.interval);
            this.router.navigateByUrl("/");
          }
        }, 1000);
      })
      .catch(err => {
        console.error(err);
        window.alert("Sorry but we failed to delete your account\nPlease try again after some time");
        // this.router.navigateByUrl("/login");
      })
  }

}
