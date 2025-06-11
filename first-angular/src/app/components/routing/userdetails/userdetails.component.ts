import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {

  user: any;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient){}

  ngOnInit(){
    console.log("Init Called...");
    this.activatedRoute.params.subscribe((paramObj: any) => {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${paramObj.id}`).subscribe(userResponse => {
        this.user = userResponse;
      })
    })
    
  }
}
