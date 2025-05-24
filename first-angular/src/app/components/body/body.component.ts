import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { Assignment1Component } from '../assignment1/assignment1/assignment1.component';
import { DirectivesComponent} from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { Assignment2Component } from '../assignment2/assignment2.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { SweetalertDemoComponent } from '../sweetalert-demo/sweetalert-demo.component';
import { EmployeecrudComponent } from '../employeecrud/employeecrud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { Pipeassignment4Component } from '../pipeassignment4/pipeassignment4.component';
import { ParentComponent } from '../parent/parent.component';
import { Assignment5Component } from '../assignment5/assignment5.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,Assignment1Component,DirectivesComponent,Assignment2Component,ProductsComponent,MyModalComponent,SweetalertDemoComponent,EmployeecrudComponent,PipesComponent,Pipeassignment4Component,ParentComponent,Assignment5Component,Math1Component,Math2Component],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
