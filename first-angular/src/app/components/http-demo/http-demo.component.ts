import { Component, RESPONSE_INIT } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { log } from 'node:console';
import { response } from 'express';

@Component({
  selector: 'app-http-demo',
  imports: [],
  templateUrl: './http-demo.component.html',
  styleUrl: './http-demo.component.css'
})
export class HttpDemoComponent {

  user_url = "https://jsonplaceholder.typicode.com/users";
  user_subscription: any;
  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    this.fetchUserData_angular();
  }

  // JS Code
  fetchUserData_javascript(){
    fetch(this.user_url).then(response => {
      response.json().then(response => {
        console.log(response);
      })
    })
  }

  //get() returns Observable(similar to promise but it has extra features)
  fetchUserData_angular(){
    this.user_subscription = this.httpClient.get(this.user_url, {observe: 'response'}).subscribe(response => {
      console.log("Angular Response ==== ",response); 
    });  //returns Observable
  }

  ngOnDestroy(){
    if(this.user_subscription){
      this.user_subscription.unsubscribe();
    } 
  }
}
