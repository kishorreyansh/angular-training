import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { Observable, interval} from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {

  //numPublisher: Observable<number> = interval(1000);

  numPublisher: Observable<number> | undefined;

  // constructor() {
  //   this.numPublisher = interval(1000);
  // }

  constructor(private ngZone: NgZone) {}

  // ngOnInit(): void {}

  // ngOnInit() {
  // this.ngZone.runOutsideAngular(() => {
  //     this.numPublisher = interval(1000);
  //   });
  // }

  ngOnInit() {
    console.log('Interval is getting invoked');
    this.numPublisher = interval(1000);
  }
}