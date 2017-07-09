import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { AuthenticationService } from './authentication.service'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule  } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyBlxg6JnDLH9LVRzshgm_3k0YYafTKaoPc",
  authDomain: "angularloginapp-34265.firebaseapp.com",
  databaseURL: "https://angularloginapp-34265.firebaseio.com",
  projectId: "angularloginapp-34265",
  storageBucket: "angularloginapp-34265.appspot.com",
  messagingSenderId: "465345875436"
}

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
