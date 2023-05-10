package tech.getarrays.employeemanager.controller;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	private static final Logger LOG = LoggerFactory.getLogger(EmployeeController.class);

	private final EmployeeService employeeService;

	
	public EmployeeController(EmployeeService employeeService) {

		this.employeeService = employeeService;
	}

	@PostMapping(path = "/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		Employee emp=employeeService.addEmployee(employee);
		return new ResponseEntity<Employee>(emp,HttpStatus.OK);
	}

	@PutMapping(path = "/update")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
		Employee emp = employeeService.updateEmployee(employee);
		return new ResponseEntity<Employee>(emp,HttpStatus.OK);
	}

	@GetMapping(path = "/all")
	public ResponseEntity<List<Employee>> findAllEmployee() {
		LOG.info("");
		List<Employee> employees = employeeService.findAllEmployee();
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}

	@GetMapping(path = "/find/{id}")
	public ResponseEntity<Employee> findEmployeeById(@PathVariable(value = "id") Long id) {
		Employee employee = employeeService.findEmployeeById(id);
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}

	@DeleteMapping(path = "/delete/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable(name = "id") Long id) {
		employeeService.deleteEmployeeById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
