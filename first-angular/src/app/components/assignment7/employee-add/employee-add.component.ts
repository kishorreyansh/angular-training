import { Component,ViewChild,Output,EventEmitter,ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  showModal = false;

  @ViewChild('addEmployeeModal') modalRef!: ElementRef;
  @Output() saveEvent = new EventEmitter<any>();

  id = '';
  name = '';
  username = '';
  email = '';
  website = '';
  modalInstance: any;

  open() {
    //this.id = (index + 1).toString(); 
    this.showModal = true;

    setTimeout(() => {
      if (this.modalRef?.nativeElement) {
        this.modalInstance = new bootstrap.Modal(this.modalRef.nativeElement);
        this.modalInstance.show();
      }
    }, 0);
  }

  save() {
    const newEmp = {
      id: Number(this.id),
      name: this.name,
      username: this.username,
      email: this.email,
      website: this.website
    };

    this.saveEvent.emit(newEmp);
    this.modalInstance?.hide();
    this.resetForm();
    this.showModal = false;
  }
  

  resetForm() {
    this.id = '',
    this.name = '';
    this.username = '';
    this.email = '';
    this.website = '';
  }
}
