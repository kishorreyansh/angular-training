import { Component,ElementRef,Input, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-usermodal',
  imports: [],
  templateUrl: './usermodal.component.html',
  styleUrl: './usermodal.component.css'
})
export class UsermodalComponent {
  
  @Input() employee: any;
  @ViewChild('employeeModal') userModalRef!: ElementRef;

  private modalInstance: any;

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.userModalRef.nativeElement);
  }

  open() {
    this.modalInstance?.show();
  }
}
