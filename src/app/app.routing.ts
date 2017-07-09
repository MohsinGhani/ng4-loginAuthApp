import { Routes, RouterModule,Router } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'


const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: UserDashboardComponent },
    {path:'**', component: LoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);