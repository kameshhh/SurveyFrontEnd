import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-takensurvey',
  templateUrl: './takensurvey.component.html',
  styleUrls: ['./takensurvey.component.css']
})
export class TakensurveyComponent implements OnInit {

  takensurveylist:any[]=[];
  constructor(public userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.gettakensurveylist().subscribe((data:any[])=>{
      this.takensurveylist=data;
    })
  }

}
