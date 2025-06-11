import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private router: Router){

  }
  fetchApiGoHome(){
    console.log("About us Fetch API.....");
    this.router.navigateByUrl('/home');
  }

}
