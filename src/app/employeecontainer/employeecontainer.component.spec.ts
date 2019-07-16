import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecontainerComponent } from './employeecontainer.component';

describe('EmployeecontainerComponent', () => {
  let component: EmployeecontainerComponent;
  let fixture: ComponentFixture<EmployeecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
