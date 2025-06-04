import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from,Observable, interval,range, take,map,filter} from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {

  //Observable variable should append with $ (example: time$)
  time$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    //this.create_observable_1();
    //this.fetchUsers();
    //this.from_demo();
    this.interval_demo();
    //this.range_demo();
  }

  create_observable_1(){
    let publisher1 = new Observable((producer) => {
      producer.next('AAAAA');
      producer.next('BBBBB');
      producer.next('CCCCC'); //3 CHUNCKS publishing data
      producer.complete();
    });
    /*let subscriber1 = publisher1.subscribe(
      (partialResponse)=>{
        console.log('Partial Response Received',partialResponse)
      },
      (error) => {
        console.log('Something went wrong',error)
      }, () => {
        console.log('All Data Received')
      }
    );*/
    //New Syntax 
    //every subscribe() has 3 callback functions and min 1 
    let subscriber1 = publisher1.subscribe({
      next: (partialResponse) => {console.log('Partial Response Received',partialResponse)},
      error: (error) => {console.log('Something went wrong',error)},
      complete: () => {console.log('All Data Received')}
    });
  };

  fetchUsers(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (partialResponse) => {console.log('Partial Response Received',partialResponse)},
      error: (error) => {console.log('Something went wrong',error)},
      complete: () => {console.log('All Data Received')}
    });
  }

  from_demo(){
    let carsArr = ['KIA','BMW','HONDA CITY']; //ARRAY only
    let carsObservable = from(carsArr);  //from() accepts array and converts into observable
    carsObservable.subscribe((response) => {console.log('Response: ',response)});
  }

  numPublisher: any;
  interval_demo(){
    this.numPublisher = interval(1000);
    //this.numPublisher.subscribe((val:any) => {console.log(val)});  
    // In html we want to subscribe use async , in TS file if we want to subscribe we use subscribe
  }

  range_demo(){
    let publisher_1_10 = range(1,10);
    publisher_1_10.subscribe((val:any)=> console.log(val));

    let publisher_1_5 = publisher_1_10.pipe(take(5));  //without pipe we cant use take
    publisher_1_5.subscribe((val:any)=> console.log(val));

    let publisher_1_10_square = publisher_1_10.pipe(map(ele => ele * ele ));  //without pipe we cant use map
    publisher_1_10_square.subscribe((val:any)=> console.log(val));

    let publisher_1_10_even = publisher_1_10.pipe(filter(ele => ele % 2 == 0 ));  //without pipe we cant use filter
    publisher_1_10_even.subscribe((val:any)=> console.log(val));
  }
}
