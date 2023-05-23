import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css']
})
export class GetStudentByIdComponent implements OnInit{

  student : Student = new Student();
  showElement : boolean = false;

  constructor(private router:Router, private studentService:StudentService){}

  ngOnInit(): void {
    
  }

  searchStudent(){
    this.studentService.getStudentId(this.student.id).subscribe(data => {
      console.log(data);
      this.student=data;
      this.showElement = true;
    });
  }

  handleInputChange() {
    if (!this.student.id) {
      this.showElement = false; // Restablecer showElement si el valor del input está vacío
    }
  }

  
}
