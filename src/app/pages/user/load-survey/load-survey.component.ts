import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-survey',
  templateUrl: './load-survey.component.html',
  styleUrls: ['./load-survey.component.css']
})
export class LoadSurveyComponent implements OnInit {



  surveyde: any;
  Date2 = formatDate(new Date(),'yyyy-MM-dd','en_US');
  // Date2: Date = new Date();
  catId: any;
  surveys: any | any[];
  qid: any;
  newItemList: any;


  constructor(private _route: ActivatedRoute, private servey: QuizService, private _router: Router) { }




  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.catId = params['catId'];
      if (this.catId == 0) {
        console.log('Load all the quiz');

        this.servey.getActiveQuizzes().subscribe(
          (data: any) => {
            this.surveys = data;
            console.log(this.surveys);
          },
          (error) => {
            console.log(error);
            alert('error in loading all surveys');
          }
        );
      } else {
        console.log('Load specific survey');

        this.servey.getActiveSurvyesOfCategory(this.catId).subscribe(
          (data: any) => {
            this.surveys = data;
            console.log(this.surveys);
          },
          (error) => {
            alert('error in loading survey data');
          }
        );
      }
    });
  }



  public setup(){
    this.servey.getActiveSurvyesOfCategory(this.catId).subscribe(
      (data: any) => {
        this.surveys = data;
        console.log(this.surveys[5].startdate)

        
      },
      (error) => {
        alert('error in loading survey data');
      }
    );
  }

 
}
