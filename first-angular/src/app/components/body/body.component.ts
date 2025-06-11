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
import { Assignment6Component } from '../assignment6/assignment6.component';
import { HttpDemoComponent } from '../http-demo/http-demo.component';
import { Assignment7Component } from '../assignment7/assignment7.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { ObservableDemo4Component } from '../observable-demo4/observable-demo4.component';
import { MyModal2Component } from '../my-modal2/my-modal2.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { MessageAddComponent } from '../message-add/message-add.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { SignalDemo1Component } from '../signal-demo1/signal-demo1.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { Assignment8Component } from '../assignment-8/assignment-8.component';
import { SignalDemo2Component } from '../signal-demo2/signal-demo2.component';
import { SignalDemo3Component } from '../signal-demo3/signal-demo3.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,Assignment1Component,DirectivesComponent,Assignment2Component,ProductsComponent,MyModalComponent, MyModal2Component,   SweetalertDemoComponent,EmployeecrudComponent,PipesComponent,Pipeassignment4Component,ParentComponent, TrafficLightComponent,Assignment5Component,Math1Component,Math2Component,Assignment6Component,HttpDemoComponent,Assignment7Component,HttpDemo2Component,ObservableDemo1Component,ObservableDemo2Component,ObservableDemo3Component,ObservableDemo4Component,Message1Component,Message2Component,MessageAddComponent,SubjectDemo1Component,SignalDemo1Component,SignalDemo2Component, SignalDemo3Component, Assignment8Component, FormDemo1Component, FormDemo2Component,FormDemo3Component,RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
