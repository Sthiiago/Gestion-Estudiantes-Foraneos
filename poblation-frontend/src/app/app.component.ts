import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de gestión de estudiantes foráneos';

  constructor(private router:Router){}

  list(){
    this.router.navigate(["students"]);
  }

  addStudent(){
    this.router.navigate(["registerStudent"]);
  }

  filterStudentById(){
    this.router.navigate(["filterStudent"]);
  }

  avgRent() {
    this.router.navigate(["avgRent"]);
  }

  avgSpent() {
    this.router.navigate(["avgSpent"]);
  }
}
