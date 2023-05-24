import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentService} from "../../Service/student.service";
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-average-salary',
  templateUrl: './average-salary.component.html',
  styleUrls: ['./average-salary.component.css']
})
export class AverageSalaryComponent implements OnInit{

  number:Number;

  constructor(private router:Router, private studentService:StudentService) {
  }

  ngOnInit(): void {
    this.obtainAvg();
    this.RenderChart();
  }

  private obtainAvg() {
    this.studentService.obtainAvgSalary().subscribe(data => {
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
      const canLiveStudents = students.filter(student => (student.spentRent+student.spentMarket+student.spentTransport) > 1160000);
      const canLiveCount = canLiveStudents.length;

      // Filtrar estudiantes que no pagan renta
      const canNotLiveStudents = students.filter(student => !((student.spentRent+student.spentMarket+student.spentTransport) > 1160000));
      const canNotLiveCount = canNotLiveStudents.length;

      const colors = this.generateRandomColors(students.length);

      new Chart("myChart", {
        type: 'doughnut',
        data: {
          labels: ['Pueden vivir con 1 SMMLV', 'No pueden vivir con 1 SMMLV'],
          datasets: [{
            data: [canNotLiveCount, canLiveCount],
            backgroundColor: colors,
            borderWidth: 1
          }]
        },
        options: this.chartOptions
      });

    });

  }

  generateRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generar un color hexadecimal aleatorio
      colors.push(color);
    }
    return colors;
  }


}
