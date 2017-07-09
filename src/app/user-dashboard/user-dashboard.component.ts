import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth,private _AuthenticationService: AuthenticationService,private _router: Router) {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
           //user here
        }
        else{
          this._router.navigate(['/login']);
        }
    });
  }

  logout(){
    this._AuthenticationService.logoutUser();
  }

  ngOnInit() {
  }

}
