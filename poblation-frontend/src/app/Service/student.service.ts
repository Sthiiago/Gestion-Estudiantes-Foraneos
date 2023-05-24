import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Esta URL obtiene el listado de todos los estudiantes en el backend
  private baseURL = "http://localhost:8080/api/v1/students";

  constructor(private httpClient: HttpClient) { }

  //Este método sirve para obtener los empleados
  getStudentList(){
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  //Este método sirve para registrar un estudiante
  saveStudent(student:Student){
    return this.httpClient.post<Student>(this.baseURL, student);
  }

  getStudentId(id:number){
    return this.httpClient.get<Student>(this.baseURL+"/"+id);
  }

  updateStudent(student:Student){
    return this.httpClient.put<Student>(this.baseURL+"/"+student.id,student);
  }

  deleteStudent(student:Student){
    return this.httpClient.delete<Student>(this.baseURL+"/"+student.id);
  }


  obtainAvg() {
    return this.httpClient.get<Number>(this.baseURL+"/average-pay-rent");
  }

}
