import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
//   user = null as any;
//   constructor(private login: LoginService) {}

//   ngOnInit(): void {
//     this.user = this.login.getUser();
//     console.log(this.user)
    
//   }
// }

constructor(
  private _route: ActivatedRoute,
  private _login: LoginService,
  private _user:UserserviceService,
  private _router: Router
) {}

qId = 0;
user: any;
categories: any;

ngOnInit(): void {
  this.qId = this._route.snapshot.params['qid'];
  // alert(this.qId);
  this.user = this._login.getUser();
    console.log(this.user)
}

public updateData() {


  this._user.updateUser(this.user).subscribe(
    (data) => {
      Swal.fire('Success !!', 'user updated', 'success').then((e) => {
        this._router.navigate(['/admin/listofusers']);
      });
    },
    (error) => {
      Swal.fire('Error', 'error in updating user', 'error');
      console.log(error);
    }
  );
}
}