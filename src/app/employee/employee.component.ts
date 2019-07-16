import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  formGroup: FormGroup;
  @Output() onChange=new EventEmitter();
  @Input() index?:number;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required]],//Custom validatoe
      'first_name': [null, Validators.required],
      'last_name': [null, [Validators.required]],
    });
  }

  ReflectData(){
    console.log(this.formGroup.value);
    let FormData=this.formGroup.value;
    if(this.index>=0){
      FormData.index=this.index;
    }
    
    this.onChange.emit(FormData);
  }

}
