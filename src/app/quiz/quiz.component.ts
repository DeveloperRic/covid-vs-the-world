import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { questions } from './questions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private questions = questions;
  back_nav = 'Home';
  displayQuestions = {
    qOneText: '',
    qTwoText: '',
    qThreeText: '',
    qFourText: ''
  };
  currentQuestion = 0;
  mark;
  answer;
  question = '';
  quizCompleted = false;
  questionCompleted = false;

  score = 0;

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.titleService.setTitle('Quiz | covid-vs-the-world');
    this.nextQuestion();
  }

  answerSelected(num){
    this.questionCompleted = true;
    this.answer = questions[this.currentQuestion-1].explanation;
    if(this.checkQuestion(num)){
      this.mark = "Correct!"
    }
    else{
      this.mark = "Incorrect";
    }
  }

  nextQuestion() {
    this.questionCompleted = false;
    if (this.currentQuestion == 10) {
      this.quizCompleted = true;
    }
    else if(!this.quizCompleted) {
      this.question = questions[this.currentQuestion].question;
      let randomizedAnswers = this.getAnswers();
      this.displayQuestions.qOneText = randomizedAnswers[0];
      this.displayQuestions.qTwoText = randomizedAnswers[1];
      this.displayQuestions.qThreeText = randomizedAnswers[2];
      this.displayQuestions.qFourText = randomizedAnswers[3];
      this.currentQuestion++;
    }
  }

  checkQuestion(num) {
    if (questions[this.currentQuestion - 1].answer == this.getDisplayQuestionText(num)){
      this.score++;
      return true;
    }
    else
     return false;
  }

  getAnswers() {
    let array = questions[this.currentQuestion].false_answers;
    array.push(questions[this.currentQuestion].answer);
    return this.shuffle(array);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getDisplayQuestionText(num){
    if(num == 0)return this.displayQuestions.qOneText
    else if (num == 1) return this.displayQuestions.qTwoText
    else if (num == 2) return this.displayQuestions.qThreeText
    else return this.displayQuestions.qFourText
  }
}
