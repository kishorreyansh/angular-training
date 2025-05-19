import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { Assignment1Component } from '../assignment1/assignment1/assignment1.component';
import { DirectivesComponent} from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { Assignment2Component } from '../assignment2/assignment2.component';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,Assignment1Component,DirectivesComponent,Assignment2Component,ProductsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
