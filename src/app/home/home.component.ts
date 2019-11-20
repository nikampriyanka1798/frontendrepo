import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 employee;
message;
  constructor(public router: Router,public service:DataService) { 
  this.getData();   
  }
getData()
{
  let StateOfResult= this.service.GetData();
    StateOfResult.subscribe((result)=>{
      this.employee=result;
    });
}
  
  ngOnInit() {

    
    // this.employee=[
    //   {no:1,name:"Priya1",address:"satara1"},
    //   {no:2,name:"Priya2",address:"satara2"},
    //   {no:3,name:"Priya3",address:"satara3"}
    // ]
  }
GoToRegister()
{
  this.router.navigate(['register']);
}

}
