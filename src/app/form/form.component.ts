import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
  back_nav = "Stories"
  title = "myTitle"
  body = ""


  verifyContent(){
    this.body = this.title;
  }
  ngOnInit(): void {
  }
  back(){

  }

}
