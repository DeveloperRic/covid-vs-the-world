import { Component, OnInit } from '@angular/core';
import { stories } from '../samplestories';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories = [];
  @Input() title;
  temp_title = "People";
  constructor() { }

  share() {
    window.alert('The product has been shared!');
  }

  wrapStori() {
    this.stories = stories.map(cur_story => {
      let shortDescription;
      if(cur_story.description.length > 200){
        shortDescription = cur_story.description.substr(0, 200);
        return { story: cur_story, expanded: false, shortDescription: shortDescription };
      }
      else{
        return { story: cur_story, expanded: false, shortDescription: null};
      }
      
    });
  }

  r_press(storyObj){
    if(storyObj.expanded)
      storyObj.expanded = false;
    else 
      storyObj.expanded = true;
  }

  ngOnInit(): void {
    this.wrapStori();
  }

}
