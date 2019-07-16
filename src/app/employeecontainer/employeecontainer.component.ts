import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeecontainer',
  templateUrl: './employeecontainer.component.html',
  styleUrls: ['./employeecontainer.component.css']
})
export class EmployeecontainerComponent implements OnInit {
  employee:Employee;
  showSpouse:boolean;
  showDependent:boolean;
  constructor() { }

  ngOnInit() {
    this.showSpouse=false;
    this.employee={
          personalInfo:{first_name:'',last_name:'',email:''},
          spouse:{first_name:'',last_name:'',email:''},
          dependents:[]
    };
    this.showDependent=false;
  }

  addSpouse(){
    this.showSpouse=true;
  }

  addDependent(){
    if(!this.showDependent){
      this.showDependent=true;
    }
    
    this.employee.dependents.push({first_name:'',last_name:'',email:''});
  }

  Employee(personalinfo){
    this.employee.personalInfo=personalinfo;
  }

  Spouse(spouseInfo){
    this.employee.spouse=spouseInfo;
  }
  Dependent(dependentInfo){
    let index=dependentInfo.index;
    Object.assign(this.employee.dependents[index], dependentInfo);
    
  }
  removeDependent(index){
    this.employee.dependents.splice(index, 1)
  }
  saveEmployee(){
    //Add validations Code Before Sending
    console.log(this.employee);
  }
}
