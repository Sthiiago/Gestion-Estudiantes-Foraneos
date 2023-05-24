package com.poblation.poblationbackend.controller;

import com.poblation.poblationbackend.dto.StudentDTO;
import com.poblation.poblationbackend.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/students")
    public List<StudentDTO> listStudents() {
        return studentService.listStudents();
    }

    @PostMapping("/students")
    public StudentDTO saveStudent(@RequestBody StudentDTO studentDTO){
        return studentService.saveStudent(studentDTO);
    }

    @GetMapping("/students/{id}")
    public StudentDTO getStudentById(@PathVariable Long id){
        return studentService.getStudentById(id);
    }

    @PutMapping("/students/{id}")
    public StudentDTO updateStudentById(@PathVariable Long id, @RequestBody StudentDTO studentDTO){
        return studentService.updateStudentById(id,studentDTO);
    }

    @DeleteMapping("/students/{id}")
    public StudentDTO deleteStudentById(@PathVariable Long id){
        return studentService.deleteStudentById(id);
    }

    @GetMapping("/students/average-pay-rent")
    public double getAveragePayRent(){
        return studentService.getAveragePayRent();
    }
}
