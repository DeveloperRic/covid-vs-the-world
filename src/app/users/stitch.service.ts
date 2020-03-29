import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Stitch, StitchAppClient, GoogleRedirectCredential } from 'mongodb-stitch-browser-sdk'

@Injectable({
  providedIn: 'root'
})
export class StitchService {
  private static client: StitchAppClient;

  constructor() {
    if (!StitchService.client) {
      StitchService.client = Stitch.
        initializeDefaultAppClient(environment.STITCH_CLIENT_APP_ID);
    }
  }

  isLoggedIn() {
    return StitchService.client.auth.isLoggedIn;
  }

  login() {
    const credential = new GoogleRedirectCredential(environment.STITCH_REDIRECT_URL);
    StitchService.client.auth.loginWithRedirect(credential);
  }

  logout() {
    StitchService.client.auth.logout();
  }

  handleRedirect(callback) {
    if (StitchService.client.auth.hasRedirectResult()) {
      StitchService.client.auth.handleRedirectResult().then(callback);
    }
  }

  getUser() {
    return StitchService.client.auth.user;
  }

  deleteAccount() {
    return StitchService.client.auth.removeUser();
  }
}
