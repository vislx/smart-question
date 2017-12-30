import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import {AuthenticateService} from "./authenticate.service";
import {TestQuestionService} from "./test-question.service";
import { TestQuestionComponent } from './test-question/test-question.component';
import { NavTestComponent } from './nav-test/nav-test.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { AdminQuestionComponent } from './admin-question/admin-question.component';
import { TestReadyComponent } from './test-ready/test-ready.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/test', component: AdminTestComponent },
  { path: 'admin/question', component: AdminQuestionComponent },
  { path: 'test', component: TestQuestionComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavComponent,
    TestQuestionComponent,
    NavTestComponent,
    NavAdminComponent,
    AdminTestComponent,
    AdminQuestionComponent,
    TestReadyComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [AuthenticateService, TestQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

