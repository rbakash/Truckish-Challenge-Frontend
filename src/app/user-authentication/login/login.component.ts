import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CommonService } from 'src/app/shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials = {
    "Email": "",
    "Password": ""
  }

  serverMessage: string;
  constructor(private commonService: CommonService, private _snackBar: MatSnackBar,
     private router: Router) {

   }

  ngOnInit() {
  }
  LoginUser() {
    this.commonService.authenticateUser(this.userCredentials).subscribe(response => {
      this._snackBar.open(response.Message, "Ok",{duration: 3500});
      if (response.status == 200) {
        sessionStorage.setItem("Id",response.Id);
        sessionStorage.setItem("Token",response.Token);
        setTimeout((router: Router) => {
          this.router.navigate(['/viewSavedPlaces']);
        }, 2000);
      }
    }, error => {
      this._snackBar.open('Internal Server Error', "Try again",{duration: 3500});
    })
  }
}
