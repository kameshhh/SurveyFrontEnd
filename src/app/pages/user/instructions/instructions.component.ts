import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit  {
  qid: any;
  survey: any;
  date1 = formatDate(new Date(),'yyyy-MM-dd','en_US');
  Date1: Date = new Date();

  constructor(
    private _route: ActivatedRoute,
    private _survey: QuizService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    // console.log(this.qid);

    this._survey.getSurveys(this.qid).subscribe(
      (data: any) => {
        // console.log(data);
        this.survey = data;
        console.log(this.survey.startDate)
      },
      (error) => {
        console.log(error);
        alert('Error in loading quiz data');
      }
    );
  }


  startSurvey() {

    this.qid = this._route.snapshot.params['qid'];
    this._survey.getSurveys(this.qid).subscribe(
      (data: any) => {
        this.survey = data;
        console.log(this.survey.startDate)
        console.log(this.date1)
        if(this.date1>=this.survey.startDate && this.date1<=this.survey.endDate){
    Swal.fire({
      title: 'Do you want to start the survey?',

      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      
      if (result.isConfirmed) {
        this._router.navigate(['/start/' + this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }else if(this.date1>=this.survey.endDate){
    Swal.fire(
      `You cannot take this survey as it was ended on  ${this.survey.endDate}`, )
    }
  
  
  else{
    Swal.fire(
     `You cannot take this survey as this will start on  ${this.survey.startDate}`, )

     
   }
},
  (error) => {
    console.log(error);
    alert('Error in loading quiz data');
  }
);
}

  
  // startSurvey() {
  //   Swal.fire({
  //     title: 'Do you want to start the survey?',

  //     showCancelButton: true,
  //     confirmButtonText: `Start`,
  //     denyButtonText: `Don't save`,
  //     icon: 'info',
  //   }).then((result) => {
      
  //     if (result.isConfirmed) {
  //       this._router.navigate(['/start/' + this.qid]);
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info');
  //     }
  //   });
  // }
  }

