import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './Student/list-students/list-students.component';
import { HttpClientModule } from '@angular/common/http';
import { SaveStudentComponent } from './Student/save-student/save-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { GetStudentByIdComponent } from './Student/get-student-by-id/get-student-by-id.component';
import { AverageRentComponent } from './Student/average-rent/average-rent.component';


@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    SaveStudentComponent,
    UpdateStudentComponent,
    GetStudentByIdComponent,
    AverageRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
