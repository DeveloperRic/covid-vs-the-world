import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { LandingComponent } from './landing/landing.component';
import { SocietyComponent } from './society/society.component';
import { QuizComponent } from './quiz/quiz.component';
import { DemographicComponent } from './people/demographic/demographic.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    LandingComponent,
    SocietyComponent,
    QuizComponent,
    DemographicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
