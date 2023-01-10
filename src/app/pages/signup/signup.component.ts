import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserserviceService,private snack:MatSnackBar) { }

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phno:'',


  }

  ngOnInit(): void {
  }

  formSubmit(){
    // console.log(this.user);
    if(this.user.username=='' || this.user.username== null){
      // alert("User is required!")
      this.snack.open("Username is req !!" ,'ok',{
        duration:3000,
      });
      return
    }

    // alert("submit");


  this.userService.addUser(this.user).subscribe((data:any)=>{
    console.log(data)
    Swal.fire('Success','user ' +this.user.username+' is registered','success')
    
  },error=>{
    this.snack.open("Something went wrong!!" ,'ok',{
      duration:3000,
    });
  }
  );
  
}

}
