import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {ReportsUsersComponent} from './pages/reports-users/reports-users.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './registros/components/login/login.component';
import { RegistroComponent } from './registros/components/registro/registro.component';
import { MonitorRegisterComponent } from './pages/monitor-register/monitor-register.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'ReportUsers',
    component: ReportsUsersComponent,
  },

  {
    path: 'MonitorRegister',
    component: MonitorRegisterComponent,
  },

  
  

  {
    path: '**',
    component: NotFoundComponent,
  },
  { 
    path: "",
    component: AppComponent, 
    pathMatch: "full" 
  },

  { 
    path: "login", 
    component: LoginComponent, 
    pathMatch: "full" 
  },
  { 
    path: "register", 
    component: RegistroComponent, 
    pathMatch: "full" 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
