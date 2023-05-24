import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentService} from "../../Service/student.service";
import {Chart} from "chart.js";

@Component({
  selector: 'app-average-spent',
  templateUrl: './average-spent.component.html',
  styleUrls: ['./average-spent.component.css']
})
export class AverageSpentComponent implements OnInit{

  number:Number;

  constructor(private router:Router, private studentService:StudentService) {
    //Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.obtainAvg();
    this.RenderChart();
  }

  private obtainAvg() {
    this.studentService.obtainAvgSpent().subscribe(data => {
      this.number = data;
    });
  }

  chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  RenderChart(){

    this.studentService.getStudentList().subscribe(students => {
      // Filtrar estudiantes que pagan renta

      const labels = students.map(student => `${student.name} (ID: ${student.id})`);
      const data = students.map(student => student.spentRent+student.spentTransport+student.spentMarket);

      const colors = this.generateRandomColors(students.length);

      new Chart("myChart", {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Gastos de cada estudiante',
            data: data,
            backgroundColor:colors,
            borderWidth: 2,
            borderRadius: 35,
            borderSkipped: false
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
