import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-survey',
  templateUrl: './load-survey.component.html',
  styleUrls: ['./load-survey.component.css']
})
export class LoadSurveyComponent implements OnInit{
catId: any;
surveys: any;
constructor(private _route: ActivatedRoute, private servey: QuizService) {}

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
}

