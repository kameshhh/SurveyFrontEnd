import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';

import { AddSurveyComponent } from './pages/admin/add-survey/add-survey.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';

import { ViewSurveysComponent } from './pages/admin/view-surveys/view-surveys.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadSurveyComponent } from './pages/user/load-survey/load-survey.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { UpdateSurveyComponent } from './pages/admin/update-survey/update-survey.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserlistComponent } from './pages/admin/userlist/userlist.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full',},

  {path:'signup',component:SignupComponent,pathMatch:'full',},
  {path:'login',component:LoginComponent,pathMatch:'full',},
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewSurveysComponent,
      },
      {
        path: 'add-quiz',
        component: AddSurveyComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateSurveyComponent,
      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionsComponent,
      },
      {
        path: 'listofusers',
        component: UserlistComponent,
      },
      
    ],
  },{
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: ':catId',
        component: LoadSurveyComponent,
      },
      
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,
      },
      
      {
        path: 'user/:qid',
        component: UpdateUserComponent,
      },
     
    ],
  },{
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [NormalGuard],
  },
  {
    path: 'user-profile',
    component: ProfileComponent,
  },
  {
    path: 'user/:qid',
    component: UpdateUserComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
