import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { PeopleComponent } from "./people/people.component";
import { SocietyComponent } from "./society/society.component";
import { QuizComponent } from "./quiz/quiz.component";
import { StoriesComponent } from "./stories/stories.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  { path: "people", component: PeopleComponent },
  { path: "society", component: SocietyComponent },
  { path: "quiz", component: QuizComponent },
  { path: "stories", component: StoriesComponent },
  { path: "form", component: FormComponent },
  { path: "", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
