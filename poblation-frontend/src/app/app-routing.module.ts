import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './Student/list-students/list-students.component';
import { SaveStudentComponent } from './Student/save-student/save-student.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { GetStudentByIdComponent } from './Student/get-student-by-id/get-student-by-id.component';
import {AverageRentComponent} from "./Student/average-rent/average-rent.component";
import {AverageSpentComponent} from "./Student/average-spent/average-spent.component";

const routes: Routes = [
  {path: 'students',component:ListStudentsComponent},
  {path: '',redirectTo:'students',pathMatch:'full'},
  {path: 'registerStudent',component:SaveStudentComponent},
  {path: 'updateStudent',component:UpdateStudentComponent},
  {path: 'filterStudent', component:GetStudentByIdComponent},
  {path: 'avgRent', component:AverageRentComponent},
  {path: 'avgSpent', component:AverageSpentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
