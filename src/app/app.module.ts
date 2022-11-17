//Platform
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


//Material
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

//Mserial Datepicker
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";

//Componentes

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import {ReportsUsersComponent} from './pages/reports-users/reports-users.component';
import { HelpComponent } from './pages/help/help.component';
import { MonitorRegisterComponent } from './pages/monitor-register/monitor-register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { BlocksDetailsComponent } from './pages/blocks-details/blocks-details.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    AlertsComponent,     
    NotFoundComponent, 
    ReportsUsersComponent,
    MonitorRegisterComponent,
    NavbarComponent,
    FooterComponent,
    BinnacleComponent,
    BlocksComponent,
    BlocksDetailsComponent,    
    UserDetailsComponent,
    HelpComponent,

  ],
  imports: [
    BrowserModule,

    //angular froms - Reactive forms
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule, 
    MatCardModule,

    //datepicker
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
