import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  Stitch,
  RemoteMongoClient,
  StitchAppClient,
  GoogleRedirectCredential,
  AnonymousCredential,
  RemoteMongoDatabase,
  StitchUser
} from 'mongodb-stitch-browser-sdk';
import { User } from "./user";
import { Story } from '../form/story';

@Injectable({
  providedIn: 'root'
})
export class StitchService {
  private static client: StitchAppClient;
  private static db: RemoteMongoDatabase;
  private static readonly USERS_COL = "users";
  private static readonly STORIES_COL = "stories";

  constructor() {
    if (!StitchService.client) {
      const client = StitchService.client = Stitch.
        initializeDefaultAppClient(environment.STITCH_CLIENT_APP_ID);
      const mongodb = client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );
      StitchService.db = mongodb.db(environment.MONGODB_DATABASE_NAME);
    }
  }

  isLoggedIn() {
    return StitchService.client.auth.isLoggedIn;
  }

  isLoggedInWithGoogle() {
    return (
      StitchService.client.auth.isLoggedIn &&
      StitchService.client.auth.user.loggedInProviderName != 'anon-user'
    );
  }

  loginToView(): Promise<StitchUser> {
    if (!StitchService.client.auth.isLoggedIn) {
      return Stitch.defaultAppClient.auth
        .loginWithCredential(new AnonymousCredential());
    }
  }

  loginToPost() {
    const credential = new GoogleRedirectCredential(
      environment.STITCH_REDIRECT_URL
    );
    StitchService.client.auth.loginWithRedirect(credential);
  }

  logout() {
    StitchService.client.auth.logout();
  }

  handleRedirect(): Promise<StitchUser> {
    if (StitchService.client.auth.hasRedirectResult()) {
      return StitchService.client.auth.handleRedirectResult();
    }
  }

  getStitchUser(): StitchUser {
    return StitchService.client.auth.user;
  }

  deleteAccount(): Promise<void> {
    if (!this.isLoggedIn()) {
      return Promise.reject(new Error("There is no loggedInUser"));
    }

    return new Promise((resolve, reject) => {
      const stitchUser = this.getStitchUser();
      this.getAtlasUser(stitchUser, {_id: 1})
        .then(atlasUser => {
          const onDeleted = () => {
            StitchService.client.auth.removeUser()
              .then(resolve)
              .catch(reject);
          };

          if (atlasUser) {
            StitchService.db.collection(StitchService.USERS_COL)
              .deleteMany({ _id: stitchUser.id })
              .then(result => {
                if (result.deletedCount < 1) {
                  return reject(new Error("Failed to delete user from Atlas"));
                }
                onDeleted();
              })
              .catch(reject);
          } else {
            onDeleted();
          }
        })
        .catch(reject);
    });
  }

  getAtlasUser(stitchUser: StitchUser, projection = null): Promise<unknown> {
    return StitchService.db.collection(StitchService.USERS_COL)
      .findOne({ _id: stitchUser.id }, { projection: projection });
  }

  createAtlasUser(stitchUser: StitchUser): Promise<unknown> {
    return new Promise<unknown>((resolve, reject) => {
      this.getAtlasUser(stitchUser)
        .then(atlasUser => {
          if (atlasUser) return reject(new Error("Atlas user already exists"));

          const mongoUser = new User(
            stitchUser.id,
            stitchUser.profile.name,
            Date.now()
          );

          StitchService.db.collection(StitchService.USERS_COL)
            .insertOne(mongoUser)
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
  }

  getStories(): Promise<Story[]> {
    return new Promise((resolve, reject) => {
      StitchService.db.collection(StitchService.STORIES_COL)
        .find({}, { limit: 1000 })
        .toArray()
        .then(docs => resolve(docs.map(doc => Story.fromJSON(doc))))
        .catch(reject);
    });
  }

  postStory(story: Story): Promise<Story> {
    return new Promise((resolve, reject) => {
      StitchService.db.collection(StitchService.STORIES_COL)
        .insertOne(story)
        .then(result => {
          story.id = result.insertedId;
          resolve(story);
        })
        .catch(reject);
    });
  }
}
