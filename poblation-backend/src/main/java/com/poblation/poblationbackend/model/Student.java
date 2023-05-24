package com.poblation.poblationbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "studenttest")
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class Student implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable= false, length = 50)
    private String name;

    @Column(name = "lastName", nullable= false, length = 50)
    private String lastName;

    @Column(name = "email", nullable= false, length = 50, unique = true)
    private String email;

    @Column(name = "spentMarket", nullable= false)
    private Long spentMarket;

    @Column(name = "spentRent", nullable= false)
    private Long spentRent;

    @Column(name = "spentTransport", nullable= false)
    private Long spentTransport;

    @Column(name = "payRent", nullable= false)
    private boolean payRent;

}
