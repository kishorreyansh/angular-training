import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives',
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 4;

  dayNumber: number = 1;

  stateNames = ['Kansas','Missouri','Chicago','New York'];
}
