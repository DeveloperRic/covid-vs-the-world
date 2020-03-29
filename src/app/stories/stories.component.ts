import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StitchService } from "../users/stitch.service";
import { sampleStories } from '../samplestories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @Output() stories = [];
  @Output() loggedIn: boolean;
  @Input() back_nav;

  constructor(
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
            .concat(sampleStories.map(storyMapper));
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
    this.getStories();
    this.back_nav = "People";
    this.loggedIn = this.stitchService.isLoggedIn();
  }

  createStory() {
    if (!this.stitchService.isLoggedIn()) {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl("/form");
    }
  }

}
