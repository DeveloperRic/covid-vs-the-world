import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StitchService } from "../users/stitch.service";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @Output() stories = [];
  @Output() isLoggedInWithGoogle: boolean;
  @Input() back_nav;

  constructor(
    private titleService: Title,
    private router: Router,
    private stitchService: StitchService
  ) { }

  share() {

  }

  isMember() {
    //grab user identification if any
    //is authenticated
    //if not logged in
    //login template
    //isbanned
    //tell user to fuck off
    //else - already logged in
    //low it
    //login template

    //For now
    this.router.navigate(["/", 'form']);
  }

  //Create stories array
  getStories() {
    const storyMapper = cur_story => {
      let shortDescription;
      if (cur_story.description.length > 200) {
        shortDescription = cur_story.description.substr(0, 200);
        return { story: cur_story, expanded: false, shortDescription: shortDescription };
      }
      else {
        return { story: cur_story, expanded: false, shortDescription: null };
      }

    }
    this.stitchService.getStories()
      .then(storyList => {
        this.stories =
          storyList.map(storyMapper)
      })
      .catch(err => {
        console.error(err);
        window.alert("Failed to get stories");
      })
  }


  r_press(storyObj) {
    if (storyObj.expanded)
      storyObj.expanded = false;
    else
      storyObj.expanded = true;
  }

  ngOnInit(): void {
    this.titleService.setTitle("Real people's stories | covid-vs-the-world");
    this.checkLoggedIn();
    this.back_nav = "People";
  }

  checkLoggedIn() {
    this.isLoggedInWithGoogle = this.stitchService.isLoggedInWithGoogle();
    if (!this.stitchService.isLoggedIn()) {
      this.stitchService.loginToView()
        .then(() => this.getStories())
        .catch(console.error);
    } else {
      this.getStories();
    }
  }

  createStory() {
    if (!this.stitchService.isLoggedInWithGoogle()) {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl("/form");
    }
  }

}
