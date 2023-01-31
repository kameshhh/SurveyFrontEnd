import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { AddSurveyComponent } from './pages/admin/add-survey/add-survey.component';
import { ViewSurveysComponent } from './pages/admin/view-surveys/view-surveys.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoadSurveyComponent } from './pages/user/load-survey/load-survey.component';
import { StartComponent } from './pages/user/start/start.component';

import { UpdateSurveyComponent } from './pages/admin/update-survey/update-survey.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { UserlistComponent } from './pages/admin/userlist/userlist.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { TakensurveyComponent } from './pages/admin/takensurvey/takensurvey.component';
import { UsertakensurveyComponent } from './pages/admin/usertakensurvey/usertakensurvey.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    UserSidebar,
    AddSurveyComponent,
    ViewSurveysComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,

    LoadSurveyComponent,
     StartComponent,
     UpdateSurveyComponent,
     InstructionsComponent,
     UserlistComponent,
     UpdateUserComponent,
     TakensurveyComponent,
     UsertakensurveyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule

    

    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
