import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  GetData()
  {
    return this.http.get("http://192.168.43.49:8000/employees");
  }
  AddData(emp:any)
  {
    return this.http.post("http://192.168.43.49:8000/employees",emp);
  }
  
}
