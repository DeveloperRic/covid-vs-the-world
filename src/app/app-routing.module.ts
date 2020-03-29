import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { PeopleComponent } from "./people/people.component";
import { PeopleDemographicComponent } from "./people/demographic/demographic.component";
import { SocietyComponent } from "./society/society.component";
import { SocietyDemographicComponent } from "./society/demographic/demographic.component";
import { QuizComponent } from "./quiz/quiz.component";
import { StoriesComponent } from "./stories/stories.component";
import { FormComponent } from "./form/form.component";
import { LoginComponent } from "./users/login/login.component";
import { LoginRedirectComponent } from "./users/redirect/redirect.component";
import { LoginDeletedComponent } from "./users/deleted/deleted.component";

const routes: Routes = [
  { path: "people", component: PeopleComponent },
  { path: "people/:demographic", component: PeopleDemographicComponent },
  { path: "society", component: SocietyComponent },
  { path: "society/:demographic", component: SocietyDemographicComponent },
  { path: "quiz", component: QuizComponent },
  { path: "stories", component: StoriesComponent },
  { path: "form", component: FormComponent },
  { path: "login", component: LoginComponent },
  { path: "login/redirect", component: LoginRedirectComponent },
  { path: "login/deleted", component: LoginDeletedComponent },
  { path: "**", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
