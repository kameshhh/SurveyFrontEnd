import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  Date1 :Date= new Date();
  qid: any;
  questions: any | any[] ;
  userResponse: any | any[] ;

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;

  isSubmit = false;

  timer: any;
  user = null as any;

  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _quiz: QuizService,
    private login: LoginService
  ) {}

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    console.log(this.qid);
    this.loadQuestionls();
    this.user = this.login.getUser();
  }
  loadQuestionls() {
    this._question.getQuestionsOfSurveyForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;

        this.timer = this.questions.length * 2 * 60;

        console.log(this.questions);
        this.startTimer();
      },

      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loading questions of ṣurvey', 'error');
      }
    );
  }

  preventBackButton() {
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null!, location.href);
    });
  }

  submitSurvrey() {
    Swal.fire({
      title: 'Do you want to submit the survey?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz();
        // this.userRes();
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
     
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    this._question.evalSurvey(this.questions).subscribe(
      (data: any) => {
        console.log(data);
        this.marksGot = data.marksGot;
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
        this.userResponse=data;
        this.userResponse.userId=this.user.id;
        this.userResponse.sid=this.qid;
        this.userResponse.username=this.user.username;
        this.userResponse.surveyname=this.questions[0].quiz.title;
        this._question.responseSurvey(this.userResponse).subscribe(
          (data: any) => {
          console.log(data)
          // this.userResponse=data;
          // this.marksGot = data.marksGot;
          // this.correctAnswers = data.correctAnswers;
          // this.attempted = data.attempted;
          // this.isSubmit = true;
          })
      
      },
      (error) => {
        console.log(error);
      }
    );
  

  }

  // userRes(){
  // this._question.responseSurvey(this.questions).subscribe(
  //   (data: any) => {
  //   console.log(data)
  //   this.userResponse=data;
  //   this.marksGot = data.marksGot;
  //   this.correctAnswers = data.correctAnswers;
  //   this.attempted = data.attempted;
  //   this.isSubmit = true;
  //   })
  // }
}

