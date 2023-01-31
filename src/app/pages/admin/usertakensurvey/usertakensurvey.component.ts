import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-usertakensurvey',
  templateUrl: './usertakensurvey.component.html',
  styleUrls: ['./usertakensurvey.component.css']
})
export class UsertakensurveyComponent implements OnInit {

  usertakensurveylist:any[]=[];
  // qusern: any;
  qUsername: any;
  constructor(private _route: ActivatedRoute,public userService:UserserviceService) { }

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

}
