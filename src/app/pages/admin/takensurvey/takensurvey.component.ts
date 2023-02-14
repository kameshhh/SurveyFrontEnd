import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-takensurvey',
  templateUrl: './takensurvey.component.html',
  styleUrls: ['./takensurvey.component.css']
})
export class TakensurveyComponent implements OnInit {


  takensurveylist:any[]=[];
  constructor(public userService:UserserviceService,private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.gettakensurveylist().subscribe((data:any[])=>{
      this.takensurveylist=data;
    })
  }

  deleteTakenSurvey(id:number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this Survey?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this.userService.deleteTakenSurveyById(id).subscribe(res=>{
          this.takensurveylist=this.takensurveylist.filter(ts=>ts.id!==id);
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
