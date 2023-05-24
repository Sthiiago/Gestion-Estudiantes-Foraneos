import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentService} from "../../Service/student.service";
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-average-rent',
  templateUrl: './average-rent.component.html',
  styleUrls: ['./average-rent.component.css']
})
export class AverageRentComponent implements OnInit{

  number:Number;

  constructor(private router:Router, private studentService:StudentService) {
    //Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.obtainAvg();
    this.RenderChart();
  }

  private obtainAvg() {
    this.studentService.obtainAvg().subscribe(data => {
      this.number = data;
    });
  }

  chartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };
  RenderChart(){

    this.studentService.getStudentList().subscribe(students => {
      // Filtrar estudiantes que pagan renta
      const payingRentStudents = students.filter(student => student.payRent);
      const payingRentCount = payingRentStudents.length;

      // Filtrar estudiantes que no pagan renta
      const notPayingRentStudents = students.filter(student => !student.payRent);
      const notPayingRentCount = notPayingRentStudents.length;

      new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['Sí pagan renta', 'No pagan renta'],
          datasets: [{
            data: [payingRentCount, notPayingRentCount],
            backgroundColor: ['#5AA454', '#C7B42C'],
            borderWidth: 1
          }]
        },
        options: this.chartOptions
      });

    });

  }


}
