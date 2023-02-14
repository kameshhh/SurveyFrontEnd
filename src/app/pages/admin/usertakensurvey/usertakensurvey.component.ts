import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usertakensurvey',
  templateUrl: './usertakensurvey.component.html',
  styleUrls: ['./usertakensurvey.component.css']
})
export class UsertakensurveyComponent implements OnInit {

  usertakensurveylist:any[]=[];
  // qusern: any;
  qUsername: any;
  constructor(private _route: ActivatedRoute,public userService:UserserviceService,private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.qUsername = this._route.snapshot.params['qusername'];
    this.userService.getUsertakensurveylist(this.qUsername).subscribe((data:any[])=>{
      this.usertakensurveylist=data;
      console.log(this.usertakensurveylist)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUserTakenSurvey(id:number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this Survey?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this.userService.deleteTakenSurveyById(id).subscribe(res=>{
          this.usertakensurveylist=this.usertakensurveylist.filter(ts=>ts.id!==id);
        },
  
          (error) => {
            this._snak.open('Error in deleting this survey', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }


}
