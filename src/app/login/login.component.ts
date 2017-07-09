import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {id:'',password:''};
  constructor(private AuthService: AuthenticationService,private afAuth: AngularFireAuth,private _router: Router) {
    afAuth.authState.subscribe(user => {
      if (user) {        
        this._router.navigate(['/dashboard']);
      } 
    });
  }


  SignUp(){
      this.AuthService.SignUpUser(this.user.id,this.user.password);
  }

  SignIn() {
      this.AuthService.LoginUser(this.user.id,this.user.password);
  }

  loginWithGmail(){
      this.AuthService.loginWithGmailService();
  }

  ngOnInit(){
  }

}
