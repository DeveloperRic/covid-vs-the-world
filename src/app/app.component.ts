import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [slideInAnimation]
})
export class AppComponent {
  horzSpinner = "<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>";
  circleSpinner = "<div class='lds-ring'><div></div><div></div><div></div><div></div></div>";
  smallCircleSpinner = "<div class='spinner-box'><div class='circle-border'><div class='circle-core'></div></div></div>";

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
