import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StitchService } from "../stitch.service";
import { StitchUser } from 'mongodb-stitch-browser-sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login | covid-vs-the-world";
  @Output() isLoggedIn: boolean;
  @Output() loggedInUser: StitchUser;

  constructor(
    private titleService: Title,
    private router: Router,
    private stitchService: StitchService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Verify | covid-vs-the-world");
    this.loggedInUser = this.stitchService.getStitchUser();
    this.isLoggedIn = this.stitchService.isLoggedInWithGoogle();
  }

  login() {
    if (this.isLoggedIn) return;
    this.stitchService.loginToPost();
  }

  logout() {
    if (!this.isLoggedIn) return;
    this.stitchService.logout();
    this.router.navigateByUrl("/");
  }

  deleteAccount() {
    if (!this.isLoggedIn) return;
    this.stitchService.deleteAccount();
    this.router.navigateByUrl("/login/deleted");
  }

}
