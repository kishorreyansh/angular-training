import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css'
})
export class EmployeeUpdateComponent {
  @ViewChild('updateEmployeeModalRef') modalRef!: ElementRef;
  @Output() updateEvent = new EventEmitter<any>();

  name = '';
  username = '';
  email = '';
  website = '';
  id!: number;
  modalInstance: any;
  showModal = false;

  open(emp: any) {
    this.id = emp.id;
    this.name = emp.name;
    this.username = emp.username;
    this.email = emp.email;
    this.website = emp.website;
    this.showModal = true;

    setTimeout(() => {
      if (this.modalRef?.nativeElement) {
        this.modalInstance = new bootstrap.Modal(this.modalRef.nativeElement);
        this.modalInstance.show();
      }
    }, 0);
  }

  saveUpdate() {
    console.log("saveUpdate called");
    const updatedEmp = {
      name: this.name,
      username: this.username,
      email: this.email,
      website: this.website
    };
    this.updateEvent.emit({ id: this.id, data: updatedEmp });
    this.modalInstance?.hide();
    this.showModal = false;
  }
}
