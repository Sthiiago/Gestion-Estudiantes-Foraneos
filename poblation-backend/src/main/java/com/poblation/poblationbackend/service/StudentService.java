package com.poblation.poblationbackend.service;

import com.poblation.poblationbackend.dto.StudentDTO;
import com.poblation.poblationbackend.model.Student;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface StudentService {

    List<StudentDTO> listStudents();

    StudentDTO saveStudent(StudentDTO studentDTO);

    StudentDTO getStudentById(Long id);

    StudentDTO updateStudentById(Long id, StudentDTO detailsStudentDTO);

    StudentDTO deleteStudentById(Long id);

    double getAveragePayRent();
}
