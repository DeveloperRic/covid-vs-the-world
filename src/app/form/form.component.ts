import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as Filter from "bad-words";
import { StitchService } from '../users/stitch.service';
import { Story } from './story';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  back_nav = "Stories";
  title = "";
  body = "";
  private filter = new Filter()

  constructor(
    private titleService: Title,
    private router: Router,
    private stitchService: StitchService
  ) { }

  verifyContent() {
    let cleaned = false;
    if (this.filter.isProfane(this.title)) {
      this.title = this.filter.clean(this.title);
      cleaned = true;
    }
    if (this.filter.isProfane(this.body)) {
      this.body = this.filter.clean(this.body);
      cleaned = true;
    }
    if (window.confirm("Post this story? You won't be able to modify it afterwards.")) {
      const story = new Story(
        this.title,
        this.stitchService.getStitchUser().profile.name,
        this.body
      );
      this.stitchService.postStory(story)
        .then(() => {
          let successStr = "Your story was posted! You can view it in stories.";
          if (cleaned) {
            successStr += "\nHeads up, your post was cleaned because it contained some restricted words." +
              " Restricted parts of those words have been replaced with '*' characters";
          }
          window.alert(successStr);
          this.router.navigateByUrl("/stories");
        })
        .catch(err => {
          console.error(err);
          window.alert("Sorry we weren't able to post your story. Please try again after some time");
        });
    }
    //add to remote rb and local db
  }

  ngOnInit(): void {
    this.titleService.setTitle("Submit a story | covid-vs-the-world");
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.title && changes.title.previousValue != changes.title.currentValue) {
      this.titleService.setTitle(`${changes.title.currentValue} - story | covid-vs-the-world`);
    }
  }

  clearData() {
    this.title = "";
    this.body = "";
  }

}
