import { Component,EventEmitter,Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ['employeeObj'],
  outputs: ['deleteEvent']
})
export class EmployeeTableComponent {
  faTrash = faTrash;
   //@Input() employeeObj: any[] = [];
   employeeObj: any[] = [];


   deleteEvent = new EventEmitter();

   deleteUserDetails(empId: number){
    this.deleteEvent.emit(empId);
   }
}
