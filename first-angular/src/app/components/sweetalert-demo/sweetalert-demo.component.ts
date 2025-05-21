import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-sweetalert-demo',
  imports: [],
  templateUrl: './sweetalert-demo.component.html',
  styleUrl: './sweetalert-demo.component.css'
})
export class SweetalertDemoComponent {
  openAlert(){
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

   openSnackBar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
