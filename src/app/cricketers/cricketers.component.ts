import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';
declare var $ : any;
declare var jQuery: any;
@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.css']
})

export class CricketersComponent implements OnInit {
  userForm :any;
  cricketers : any;
  
  constructor(public forms:FormBuilder, private service : SharedService){
    this.userForm = this.forms.group({
      Name : [""],
      Email : [""],
      Age : [""],
      Stats : [""],
      id : []
    })
  }
  ngOnInit(): void {
    this.GetAllCricketers();
  }
  submit(){
    if(this.userForm.value.Name){
    var type = this.userForm.value.id == null?'Add':'Update';
    console.log(this.userForm.value);
    this.service.AddUser(this.userForm.value,type).subscribe(data => {
      if(type=='Update'){
        alert("Updated")
       } 
       else{
        alert("Added");
       } 
      this.userForm.reset();
      this.GetAllCricketers();
      console.log(data);

    })
  }
  else { 
    alert("Please Fill the form")
  }
  }

  GetAllCricketers(){
    this.service.getAllcricketers().subscribe(data =>{
      console.log('Users',data);
      this.cricketers = data;
    })
  }
  DeteleById(Id:any){
    this.service.deleteById(Id).subscribe(data =>{
      console.log(data);
      alert("User Deleted");
      this.GetAllCricketers();
    })
  }

  GetCricketerById(Id:any){
    this.service.getCricketerById(Id).subscribe(data => {
      alert("Get the User");
      console.log("Details",data);
      setTimeout(()=>{
        $("home-tab").click();
      },100)
      this.userForm.patchValue({
        Name : data.Name,
        Email : data.Email,
        Age : data.Age,
        Stats: data.Stats,
        id : data.id
      })
      this.GetAllCricketers();
    })
  }
}
