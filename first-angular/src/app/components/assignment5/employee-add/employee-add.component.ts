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

  name = '';
  sal = '';
  gender = '';
  modalInstance: any;

  open() {
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
      name: this.name,
      sal: Number(this.sal),
      gender: this.gender
    };

    this.saveEvent.emit(newEmp);
    this.modalInstance?.hide();
    this.resetForm();
    this.showModal = false;
  }

  resetForm() {
    this.name = '';
    this.sal = '';
    this.gender = '';
  }
}
