import { Component,Input,ViewChild,ElementRef,EventEmitter,Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-editusermodal',
  imports: [FormsModule],
  templateUrl: './editusermodal.component.html',
  styleUrl: './editusermodal.component.css'
})
export class EditusermodalComponent {

  @Input() editemployee: any;
  @ViewChild('editEmployeeModal') userModalRef!: ElementRef;
  @Output() saveEmployee: EventEmitter<any> = new EventEmitter<any>();

  private modalInstance: any;

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.userModalRef.nativeElement);
  }

  open() {
    this.modalInstance?.show();
  }

  saveUpdatedDetails() {
    this.saveEmployee.emit(this.editemployee);
    this.modalInstance.hide();
  }

}
