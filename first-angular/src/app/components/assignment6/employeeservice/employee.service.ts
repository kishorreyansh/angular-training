import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees = [
    { "eId": 101, "name": "Kohli", "sal": 15000, "gender": "male" },
    { "eId": 104, "name": "Reyansh", "sal": 8000, "gender": "male" },
    { "eId": 103, "name": "Ridhansh", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "Trisha", "sal": 19000, "gender": "female" },
    { "eId": 105, "name": "Kishor", "sal": 8000, "gender": "male" },
    { "eId": 106, "name": "Shreya Ghoshal", "sal": 49000, "gender": "female" }
  ];

  getAllEmployees(){
    return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter(emp => emp.gender === 'male');
  }

  getFemaleEmployees(){
    return this.employees.filter(emp => emp.gender === 'female');
  }
}
