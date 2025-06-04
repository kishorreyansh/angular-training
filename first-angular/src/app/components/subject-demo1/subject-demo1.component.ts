import { Component } from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css'
})
export class SubjectDemo1Component {
  ngOnInit(){
    this.subject_demo();
    this.behaviour_subject_demo();
    this.replay_subject_demo();
    this.async_subject_demo();
  }

  subject_demo(){
    //only upcoming values
    let publisher = new Subject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subscriber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC');
  }

  behaviour_subject_demo(){
    //only one previous value and upcoming values
    let publisher = new BehaviorSubject('Default Value');
    publisher.next('AAAA');
    publisher.subscribe(val => console.log('Subscriber 1 ', val));
    publisher.next('BBBB');
    publisher.subscribe(val => console.log('Subscriber 2 ', val));
    publisher.next('CCCC');
  }

  replay_subject_demo(){
    //all previous value and upcoming values
    let publisher = new ReplaySubject();
    publisher.next('AAAA');
    publisher.subscribe(val => console.log('Subscriber 1 ', val));
    publisher.next('BBBB');
    publisher.subscribe(val => console.log('Subscriber 2 ', val));
    publisher.next('CCCC');
  }

  async_subject_demo(){
    //last emitted value
    let publisher = new AsyncSubject();
    publisher.next('AAAA');
    publisher.subscribe(val => console.log('Subscriber 1 ', val));
    publisher.next('BBBB');
    publisher.subscribe(val => console.log('Subscriber 2 ', val));
    publisher.next('CCCC');
    publisher.complete();
  }
}
