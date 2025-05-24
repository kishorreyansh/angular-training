import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';
import { log } from 'console';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  mathservice = inject(MathService);  //Dependency Injection

  ngOnInit(){
    console.log("Iam ngOnInit from Math2 Component");
    console.log(this.mathservice.multiply(17,2));
    
  }
}
