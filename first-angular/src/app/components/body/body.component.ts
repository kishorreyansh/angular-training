import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { Assignment1Component } from '../assignment1/assignment1/assignment1.component';
import { DirectivesComponent } from '../directives/directives.component';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,Assignment1Component,DirectivesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
