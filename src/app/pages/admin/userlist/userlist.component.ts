import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userlist:any[]=[];
  constructor(public userService:UserserviceService,private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.getuserlist().subscribe((data:any[])=>{
      this.userlist=data;
    })
  }

  // deleteUser(id:number){
  //   Swal.fire({
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'Delete',
  //     title: 'Are you sure , want to delete this question?',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //   this.userService.deleteUserById(id).subscribe(res=>{
  //     this.userlist=this.userlist.filter(user=>user.id!==id);
  //   })
  // }
  


// }

deleteUser(id:number) {
  Swal.fire({
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    title: 'Are you sure , want to delete this User?',
  }).then((result) => {
    if (result.isConfirmed) {
      //confim
      this.userService.deleteUserById(id).subscribe(res=>{
        this.userlist=this.userlist.filter(user=>user.id!==id);
      },

        (error) => {
          this._snak.open('Error in deleting users', '', {
            duration: 3000,
          });
          console.log(error);
        }
      );
    }
  });
}
}