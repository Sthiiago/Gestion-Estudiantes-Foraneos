import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students:Student[]
  totalStudents: number = 0;

  constructor (private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.obtainStudents();
  }

  private obtainStudents(){
    this.studentService.getStudentList().subscribe(dato => {
      this.students=dato;
      this.totalStudents = this.students.length;
    });

  }

  edit(student:Student){
    localStorage.setItem("id",student.id.toString());
    this.router.navigate(["/updateStudent"]);
  }

  delete(student:Student){
    this.studentService.deleteStudent(student).subscribe(data => {
      this.students=this.students.filter(p=>p!==student);
    });
  }

  confirmDelete(student: Student) {
    const customMessage = "¿Estás seguro de que deseas eliminar al usuario con ID: " + student.id + "?";
    const confirmDelete = window.confirm(customMessage);

    if (confirmDelete) {
      this.delete(student);
    }
  }

}
