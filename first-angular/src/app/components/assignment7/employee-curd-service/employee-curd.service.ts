import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCurdService {

  // user_url = "https://jsonplaceholder.typicode.com/users";
  user_url="http://localhost:3000/employees"
  userData: any;
  constructor(private httpClient: HttpClient){

  }

  getUserDataUsingGetAPI(){
    return this.httpClient.get(this.user_url);
  }
  
  getUserDataUsingPostAPI(empData: any) {
    return this.httpClient.post(this.user_url, empData);
  }

getUserDataUsingPatchAPI(id: number, empData: any) {
  return this.httpClient.patch(`${this.user_url}/${id}`, empData);
}

getUserDataUsingPutAPI(id: number, empData: any) {
  return this.httpClient.put(`${this.user_url}/${id}`, empData);
}
  getDeleteUserUsingDeleteAPI(id: number){
    let deleteId = `${this.user_url}/${id}`;
    return this.httpClient.delete(deleteId);
  }
}
