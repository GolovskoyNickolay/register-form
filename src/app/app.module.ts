import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {LoginFormComponent} from "./log-in-form/loginForm.component";
import { Step1 } from './signup/step1.component';
import { Step2 } from './signup/step2.component';
import { Summary } from './signup/summary.component';

const appRoutes1: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'step1', component: Step1},
  {path: 'step2', component: Step2},
  {path: 'summary', component: Summary}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    Step1,
    Step2,
    Summary
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes1),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
