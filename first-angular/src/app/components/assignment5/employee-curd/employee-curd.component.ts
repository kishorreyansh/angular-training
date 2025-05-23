import { Component,ViewChild } from '@angular/core';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import Swal from 'sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

@Component({
  selector: 'app-employee-curd',
  imports: [FontAwesomeModule,EmployeeTableComponent,EmployeeAddComponent],
  templateUrl: './employee-curd.component.html',
  styleUrl: './employee-curd.component.css'
})
export class EmployeeCurdComponent {
  faUserPlus = faUserPlus;

   @ViewChild(EmployeeAddComponent) addEmployeeModalRef!: EmployeeAddComponent;

  employees = [
    { "eId": 101, "name": "Kohli", "sal": 15000, "gender": "Male" },
    { "eId": 104, "name": "Reyansh", "sal": 8000, "gender": "Male" },
    { "eId": 103, "name": "Ridhansh", "sal": 7000, "gender": "Male" },
    { "eId": 102, "name": "Rohit", "sal": 9000, "gender": "Male" },
    { "eId": 105, "name": "Kishor", "sal": 8000, "gender": "Male" }
  ];

  deleteEmpFromEmployeeTable(id: number){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete"
      }).then((result) => {
        if (result.isConfirmed) {
          this.employees = this.employees.filter(employeeId => employeeId.eId !== id);
          Swal.fire({
            title: "Deleted!",
            text: "Record has been deleted.",
            icon: "success"
          });
        }
      });
    }

    addEmployeeDetails(){
      this.addEmployeeModalRef.open();
    }

    addEmployeeToList(newEmp: any) {
    const newId = Math.max(...this.employees.map(emp => emp.eId)) + 1;
    this.employees.push({ ...newEmp, eId: newId });
  }
}
