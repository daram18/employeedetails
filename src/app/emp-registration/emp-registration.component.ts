import { Component, OnInit } from '@angular/core';
import { Employee } from "src/app/shared/employee.model";
import { NgForm } from '@angular/forms';
import { EnrollmentService } from 'src/app/enrollment.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
employee: Employee;
emailpattern ="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private _enrollmentService: EnrollmentService) { }
  submitted = false;

  ngOnInit() { 
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if (form != null)
form.reset();
this.employee = {
  FirstName: '', 
  LastName: '',
  Email: '',
  Job: '',
  HiringDate: '',
  Department: '',
  Salary: ''  
}
}
onSubmit(){
  this.submitted = true;
  this._enrollmentService.enroll(this.employee)
    .subscribe(
      data => console.log('Success!', data),
      error =>  console.log('error!', error)
    )
}

  }
