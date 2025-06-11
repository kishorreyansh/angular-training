import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(private httpClient: HttpClient){

  }

  users: any;

  ngOnInit(){
    this.fetch_users();
  }

  fetch_users(){
    console.log("Fetch Users");
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.users = response;
    });
    
  }

}
