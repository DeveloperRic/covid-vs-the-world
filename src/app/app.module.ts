import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { LandingComponent } from './landing/landing.component';
import { SocietyComponent } from './society/society.component';
import { QuizComponent } from './quiz/quiz.component';
import { StoriesComponent } from './stories/stories.component';
import { FormComponent } from './form/form.component';
import { PeopleDemographicModule } from './people/demographic/demographic.module';
import { SocietyDemographicModule } from './society/demographic/demographic.module';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    LandingComponent,
    SocietyComponent,
    QuizComponent,
    StoriesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PeopleDemographicModule,
    SocietyDemographicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
