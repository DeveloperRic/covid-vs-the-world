import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StitchService } from '../stitch.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class LoginRedirectComponent implements OnInit {
  circleSpinner = "<div class='lds-ring'><div></div><div></div><div></div><div></div></div>";

  constructor(
    private stitchService: StitchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stitchService.handleRedirect(() => {
      this.router.navigateByUrl("/stories");
    });
  }

}
