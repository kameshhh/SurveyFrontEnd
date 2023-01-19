import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.css']
})
export class UpdateSurveyComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _survey: QuizService,
    private _cat: CategoryService,
    private _router: Router
  ) {}

  qId = 0;
  survey: any;
  categories: any;

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    // alert(this.qId);
    this._survey.getSurveys(this.qId).subscribe(
      (data: any) => {
        this.survey = data;
        console.log(this.survey);
      },
      (error) => {
        console.log(error);
      }
    );

    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        alert('error in loading categories');
      }
    );
  }

  //update form submit
  public updateData() {
    //validatate

    this._survey.updateSurveys(this.survey).subscribe(
      (data) => {
        Swal.fire('Success !!', 'survey updated', 'success').then((e) => {
          this._router.navigate(['/admin/quizzes']);
        });
      },
      (error) => {
        Swal.fire('Error', 'error in updating survey', 'error');
        console.log(error);
      }
    );
  }
}
