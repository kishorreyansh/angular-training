import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(private mathservice: MathService){
    
  }

  ngOnInit(){
    console.log("Iam ngOnInit from Math1 Component");
    console.log(this.mathservice.add(17,23));
    console.log(this.mathservice.sub(17,23));
  }
}
