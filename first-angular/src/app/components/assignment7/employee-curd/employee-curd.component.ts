import { Component,inject,ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { EmployeeCurdService } from '../employee-curd-service/employee-curd.service';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

@Component({
  selector: 'app-employee-curd',
  imports: [FontAwesomeModule,EmployeeAddComponent,EmployeeUpdateComponent],
  templateUrl: './employee-curd.component.html',
  styleUrl: './employee-curd.component.css'
})
export class EmployeeCurdComponent {
  employeeservice = inject(EmployeeCurdService);
  employees: any[] = [];
   faTrash = faTrash;
   faEye = faEye;
   faEdit = faEdit;
   faUserPlus = faUserPlus;

   isLoading: boolean = false;

    @ViewChild(EmployeeAddComponent) addEmployeeModalRef!: EmployeeAddComponent;
     @ViewChild(EmployeeUpdateComponent) updateEmployeeModalRef!: EmployeeUpdateComponent;


  ngOnInit() {
    this.isLoading = true;
    this.employeeservice.getUserDataUsingGetAPI().subscribe((data: any) => {
      this.employees = data;
      //console.log("Component Employees ===== ", this.employees);
      this.isLoading = false;
    });
  }

  addEmployeeDetails(){
      this.addEmployeeModalRef.open();
  }
  
 addEmployeeToList(newUser: any) {
  this.employeeservice.getUserDataUsingPostAPI(newUser).subscribe({
    next: (response: any) => {
      this.employees.push(response); 
      console.log("User saved:", response);
    },
    error: (error) => {
      console.error('Error adding user:', error);
    }
  });
}


updateEmployeeDetails(emp: any) {
  this.updateEmployeeModalRef.open(emp);
}

updateEmployeeInList(updated: any) {
  const { id, data } = updated;
  this.employeeservice.getUserDataUsingPatchAPI(id, data).subscribe({
    next: (response: any) => {
      const index = this.employees.findIndex(emp => emp.id === id);
      if (index !== -1) {
        this.employees[index] = response;
      }
    },
    error: (err) => {
      console.error('Update failed:', err);
    }
  });
}

  // deleteEmployeeDetails(id: number){
  //       Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Delete"
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           this.employeeservice.getDeleteUserUsingDeleteAPI(id).subscribe(()=> {
  //             this.employees = this.employees.filter(emp => emp.id !== id);
  //           })
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "User has been deleted.",
  //             icon: "success"
  //           });
  //         }
  //       });
  //     }

  deleteEmployeeDetails(id: number){
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
      this.employeeservice.getDeleteUserUsingDeleteAPI(id).subscribe({
        next: () => {
          this.employees = this.employees.filter(emp => emp.id !== id);
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });
        },
        error: (err) => {
          Swal.fire("Error!", "Delete failed. See console.", "error");
          console.error('Delete failed:', err);
        }
      });
    }
  });
}

}
