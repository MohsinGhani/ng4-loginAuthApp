import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import {  AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  public fireAuth: any;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public _router: Router) {
    this.fireAuth = this.afAuth.authState;
   }

SignUpUser(email:any, password:any){
  firebase.auth().createUserWithEmailAndPassword(email, password).then((successfull) => {
          this._router.navigate(['/dashboard']);
      }).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
  });
}

LoginUser(email: string,password:string): any{
    firebase.auth().signInWithEmailAndPassword(email, password).then((successfull) => {
        this._router.navigate(['/dashboard']);
    }).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
    });
}

loginWithGmailService(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      }).then((successfull) => {
          this._router.navigate(['/dashboard']);
      }).catch(function(error) {
          var errorMessage = error.message;
        alert(error.message);
      });
}

logoutUser(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).then((successfull) => {
      this._router.navigate(['/login']);
  }).catch(function(error) {
      // An error happened.
  });
}

}
