import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.css']
})
export class SaveStudentComponent implements OnInit{

  student : Student = new Student();
  showMarketAlert: boolean = false;
  showRentAlert: boolean = false;
  showTransportAlert: boolean = false;

  
  constructor(private studentService:StudentService, private router:Router){}
  
  ngOnInit(): void {
    
  }

  saveStudent(){
    this.studentService.saveStudent(this.student).subscribe(dato => {
      console.log(dato);
      this.goToListStudents();

    });
  }

  goToListStudents(){
    this.router.navigate(['/students']);
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
