import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly url = "http://localhost:3000/";
  constructor(private http : HttpClient) { 
   
  }
  AddUser(data:any, type:any):Observable<any>{
    if(type == 'Update'){
     
      return this.http.put(this.url+"Users/"+data.id,data);
    }
    else {
      return this.http.post(this.url+"Users",data);
    }
   
  }
  getAllcricketers():Observable<any>{
    return this.http.get(this.url+"Users");
  }
  deleteById(id:any):Observable<any>{
    return this.http.delete(this.url+"Users/"+id)
  }
  getCricketerById(Id:any):Observable<any>{
    return this.http.get(this.url+"Users/"+Id);
  }
}
