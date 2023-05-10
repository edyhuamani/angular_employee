package tech.getarrays.employeemanager.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.getarrays.employeemanager.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
	Optional<Employee> findEmployeeById(Long id);

	void deleteEmployeeById(Long id);
}
