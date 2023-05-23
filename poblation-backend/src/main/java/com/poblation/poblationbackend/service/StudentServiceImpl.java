package com.poblation.poblationbackend.service;

import com.poblation.poblationbackend.exceptions.ResourceNotFoundException;
import com.poblation.poblationbackend.model.Student;
import com.poblation.poblationbackend.repository.StudentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    @Override
    public List<Student> listStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public ResponseEntity<Student> getStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el estudiante con el id: " + id));
        return ResponseEntity.ok(student);
    }

    @Override
    public ResponseEntity<Student> updateStudentById(Long id, Student detailsStudent) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el estudiante con el id: " + id));

        student.setName(detailsStudent.getName());
        student.setLastName(detailsStudent.getLastName());
        student.setEmail(detailsStudent.getEmail());
        student.setPayRent(detailsStudent.isPayRent());
        student.setSpentMarket(detailsStudent.getSpentMarket());
        student.setSpentRent(detailsStudent.getSpentRent());
        student.setSpentTransport(detailsStudent.getSpentTransport());


        student = studentRepository.save(student);
        return ResponseEntity.ok(student);
    }

    @Override
    public Student deleteStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el estudiante con el id: " + id));

        studentRepository.delete(student);

        return student;
    }

    @Override
    public double getAveragePayRent() {
        List<Student> listStudents = studentRepository.findAll();
        double average = 0;

        for (Student student : listStudents) {
            if (student.isPayRent()) {
                average++;
            }
        }
        average = average/listStudents.size();
        return average;
    }
}
