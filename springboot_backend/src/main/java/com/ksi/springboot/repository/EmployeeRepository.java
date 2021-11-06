package com.ksi.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksi.springboot.model.Employee;

public interface EmployeeRepository  extends JpaRepository<Employee, Long>{

}
