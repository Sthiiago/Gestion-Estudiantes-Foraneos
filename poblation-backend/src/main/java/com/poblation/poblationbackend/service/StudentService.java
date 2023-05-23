package com.poblation.poblationbackend.service;

import com.poblation.poblationbackend.model.Student;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface StudentService {

    List<Student> listStudents();

    Student saveStudent(Student student);

    ResponseEntity<Student> getStudentById(Long id);

    ResponseEntity<Student> updateStudentById(Long id, Student detailsStudent);

    Student deleteStudentById(Long id);

    double getAveragePayRent();
}
