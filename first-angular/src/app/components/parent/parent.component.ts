import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  imports: [Child1Component,Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: number = 17;
  address_parent: string = '';
  receiveDataFromChild(addressDataFromChild: string){
    this.address_parent = addressDataFromChild;
  }
}
