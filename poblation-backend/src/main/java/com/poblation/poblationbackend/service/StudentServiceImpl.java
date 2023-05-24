package com.poblation.poblationbackend.service;

import com.poblation.poblationbackend.dto.StudentDTO;
import com.poblation.poblationbackend.exceptions.ResourceNotFoundException;
import com.poblation.poblationbackend.model.Student;
import com.poblation.poblationbackend.repository.StudentRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    @Override
    public List<StudentDTO> listStudents() {
        ModelMapper modelMapper = new ModelMapper();
        List<Student> studentList = studentRepository.findAll();
        List<StudentDTO> studentDTOList = new ArrayList<>();
        for (Student student: studentList){
            studentDTOList.add(modelMapper.map(student, StudentDTO.class));
        }
        return studentDTOList;
    }

    @Override
    public StudentDTO saveStudent(StudentDTO studentDTO) {
        ModelMapper modelMapper = new ModelMapper();
        Student student = modelMapper.map(studentDTO,Student.class);
        student = studentRepository.save(student);
        studentDTO = modelMapper.map(student, StudentDTO.class);
        return studentDTO;
    }

    @Override
    public StudentDTO getStudentById(Long id) {
        ModelMapper modelMapper = new ModelMapper();
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el estudiante con el id: " + id));

        return modelMapper.map(student, StudentDTO.class);

    }

    @Override
    public StudentDTO updateStudentById(Long id, StudentDTO detailsStudentDTO) {
        ModelMapper modelMapper = new ModelMapper();

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el estudiante con el id: " + id));

        Student detailsStudent = modelMapper.map(detailsStudentDTO, Student.class);

        student.setName(detailsStudent.getName());
        student.setLastName(detailsStudent.getLastName());
        student.setEmail(detailsStudent.getEmail());
        student.setPayRent(detailsStudent.isPayRent());
        student.setSpentMarket(detailsStudent.getSpentMarket());
        student.setSpentRent(detailsStudent.getSpentRent());
        student.setSpentTransport(detailsStudent.getSpentTransport());

        student = studentRepository.save(student);

        return modelMapper.map(student, StudentDTO.class);


    }

    @Override
    public StudentDTO deleteStudentById(Long id) {
        ModelMapper modelMapper = new ModelMapper();
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el estudiante con el id: " + id));

        studentRepository.delete(student);


        return modelMapper.map(student,StudentDTO.class);
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
