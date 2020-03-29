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
  title = ""
  body = ""


  verifyContent(){
    // [^!@#$%^&*]* infront of the () would mean anywhere in the text but that can cause problems w big words
    // containing these words
    var rx = new RegExp("\\b(Fuck|Fuck you|Bitch|Bastered|Cunt|Nigger|Hor|Nazi)\\b", "i");
    if(this.title == "" || this.body == ""){
      window.alert('**Empty Boxes**');
      this.clearData();
      return;
    }
    if(rx.test(this.body) || rx.test(this.title)){
      // window.alert('**Profanity Warning**');
      window.alert("body: " + this.body + " title: " + this.title );
      this.clearData();
    }
    //add to remote rb and local db
  }
  ngOnInit(): void {
  }
  clearData(){
    this.title = "";
    this.body = "";
  }


}
