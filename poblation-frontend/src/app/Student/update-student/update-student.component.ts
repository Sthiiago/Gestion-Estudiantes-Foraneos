import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  student: Student = new Student();
  showMarketAlert: boolean = false;
  showRentAlert: boolean = false;
  showTransportAlert: boolean = false;


  constructor(private router:Router, private studentService:StudentService){}

  ngOnInit(): void {
    this.edit();
  }
  

  edit(){
    let id = localStorage.getItem("id");
    this.studentService.getStudentId(+id!).subscribe(data =>{
      this.student=data;
    });
  }

  updateStudent(){
    this.studentService.updateStudent(this.student).subscribe(data => {
      console.log(data);
      this.student=data;
      this.router.navigate(["/students"]);
    });
  }

  validateNumberFormat(fieldName: string) {
    const numberRegex = /^[0-9]+$/; // Expresión regular para aceptar solo números sin puntos
    
    switch (fieldName) {
      case 'spentMarket':
        if (!numberRegex.test(this.student.spentMarket.toString())) {
          this.showMarketAlert = true;
        } else {
          this.showMarketAlert = false;
        }
        break;
      case 'spentRent':
        if (!numberRegex.test(this.student.spentRent.toString())) {
          this.showRentAlert = true;
        } else {
          this.showRentAlert = false;
        }
        break;
      case 'spentTransport':
        if (!numberRegex.test(this.student.spentTransport.toString())) {
          this.showTransportAlert = true;
        } else {
          this.showTransportAlert = false;
        }
        break;
      default:
        break;
    }
  }
}
