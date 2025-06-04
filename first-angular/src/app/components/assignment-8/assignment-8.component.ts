import { Component, ViewChild } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import Swal from 'sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { Observable } from 'rxjs';
import { EmployeeModel } from './models/employee-model';
import { EmployeeService } from './service/employee.service';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignment-8',
  imports: [FontAwesomeModule,EmployeeDetailsComponent,EmployeeAddComponent],
  templateUrl: './assignment-8.component.html',
  styleUrl: './assignment-8.component.css'
})
export class Assignment8Component {
  faUserPlus = faUserPlus;
  faEraser = faEraser;

  employees$: Observable<EmployeeModel[]>;
  
    constructor(private empService: EmployeeService) {
      this.employees$ = this.empService.employees$;
    }

  @ViewChild(EmployeeAddComponent) addEmployeeModalRef!: EmployeeAddComponent;

  addEmployeeDetails(){
    this.addEmployeeModalRef.open();
  }
  
  removeEmployeeDetails(){

  }

  addEmployeeToList(newEmp: any){
    // Swal.fire({
    //   title: "Do you want to save the changes?",
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: "Save",
    //   denyButtonText: `Don't save`
    // }).then((result) => {
    //   this.empService.addEmployee(newEmp);
    //   if (result.isConfirmed) {
    //     Swal.fire("Employee Data Saved!", "", "success");
    //   } else if (result.isDenied) {
    //     Swal.fire("Empolyee Details Not Saved", "", "info");
    //   }
    // }); 
    Swal.fire({
      title: "Do you want to save the changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save"
    }).then((result) => {
      if (result.isConfirmed) {
        this.empService.addEmployee(newEmp);
        Swal.fire({
          title: "Saved!",
          text: "Record has been Saved.",
          icon: "success"
        });
      }
    });
  }
}
