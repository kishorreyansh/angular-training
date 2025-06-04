import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private initialEmployees: EmployeeModel[] = [
    { id: 101, name: 'Kohli', sal: 15000, gender: 'Male' },
    { id: 104, name: 'Reyansh', sal: 8000, gender: 'Male' },
    { id: 103, name: 'Ridhansh', sal: 7000, gender: 'Male' },
    { id: 102, name: 'Rohit', sal: 9000, gender: 'Male' },
    { id: 105, name: 'Kishor', sal: 8000, gender: 'Male' }
  ];
  
  private employeesSubject = new BehaviorSubject<EmployeeModel[]>(this.initialEmployees);
  public employees$: Observable<EmployeeModel[]> = this.employeesSubject.asObservable();

  constructor() {}

  // addEmployee(emp: EmployeeModel): void {
  //   const current = this.employeesSubject.getValue();
  //   this.employeesSubject.next([...current, emp]);
  // }

  addEmployee(emp: Omit<EmployeeModel, 'id'>): void {
    const current = this.employeesSubject.getValue();
    const nextId = current.length > 0 ? Math.max(...current.map(e => e.id)) + 1 : 101;
    const newEmp: EmployeeModel = { ...emp, id: nextId };
    this.employeesSubject.next([...current, newEmp]);
  }

  clearEmployee(): void {
    this.employeesSubject.next([]);
  }

  deleteEmployee(id: number): void {
    const updated = this.employeesSubject.getValue().filter(emp => emp.id !== id);
    this.employeesSubject.next(updated);
  }

}
