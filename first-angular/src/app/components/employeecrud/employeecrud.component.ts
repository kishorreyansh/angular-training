import { Component,  ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UsermodalComponent } from './usermodal/usermodal.component';
import { EditusermodalComponent } from './editusermodal/editusermodal.component';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-employeecrud',
  imports: [FontAwesomeModule,UsermodalComponent,EditusermodalComponent,FormsModule],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css'
})
export class EmployeecrudComponent {
   faTrash = faTrash;
   faEye = faEye;
   faEdit = faEdit;
   faUserPlus = faUserPlus;
   viewUserData: any;
   editUserData: any;
   searchEmployee: string = '';

  @ViewChild(UsermodalComponent) userModalComponent!: UsermodalComponent;
  @ViewChild(EditusermodalComponent) editModalComponent!: EditusermodalComponent;
   
  employees = [
    { "eId": 101, "name": "Kohli", "sal": 15000, "gender": "Male" },
    { "eId": 104, "name": "Reyansh", "sal": 8000, "gender": "Male" },
    { "eId": 103, "name": "Ridhansh", "sal": 7000, "gender": "Male" },
    { "eId": 102, "name": "Rohit", "sal": 9000, "gender": "Male" },
    { "eId": 105, "name": "Kishor", "sal": 8000, "gender": "Male" }
  ];

  viewUserDetails(employee: any){
    this.viewUserData = employee;
    this.userModalComponent.open();
  }

  editUserDetails(editemployee: any){
    this.editUserData = editemployee;
    this.editModalComponent.open();
  }

  updateEmployee(updatedEmp: any) {
    const index = this.employees.findIndex(emp => emp.eId === updatedEmp.eId);
    if (index !== -1) {
      this.employees[index] = { ...updatedEmp };
    }
  }

  sortAscending() {
    this.employees.sort((a, b) => a.eId - b.eId);
  }

  sortDescending(){
    this.employees.sort((a,b) => b.eId - a.eId);
  }

  get searchEmployees() {
    let findEmployee = this.searchEmployee?.toLowerCase() || '';
    return this.employees.filter((employee) => 
      employee && employee.name?.toLowerCase().includes(findEmployee)
    );
  }

  addEmployee(){
    Swal.fire({
      title: "Enter User Details",
      html: `
        <input id="swal-input-id" type="number" class="swal2-input" placeholder="Id">
        <input id="swal-input-username" class="swal2-input" placeholder="Employee Name">
        <input id="swal-input-salary" type="number" class="swal2-input" placeholder="Salary">
      `,
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        const popup = Swal.getPopup()!;
        const id = (popup.querySelector('[name="id"]') as HTMLInputElement).value;
        const name = (popup.querySelector('[name="username"]') as HTMLInputElement).value;
        const sal = (popup.querySelector('[name="salary"]') as HTMLInputElement).value;
        const gender = (popup.querySelector('[name="gender"]') as HTMLSelectElement).value;

        if (!id || !name || !gender || !sal ) {
          Swal.showValidationMessage(`Enter all details`);
          return;
        }

        return {
          id,
          name,
          sal: parseFloat(sal),
          gender
        };
          
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Saved!",
          text: "Employee has been Added.",
          icon: "success"
        });
      }
    });
  }

  deleteUserDetails(id: number){
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
}
