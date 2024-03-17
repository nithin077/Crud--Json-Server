import { Component,NgModule } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = 0;
  constructor() {}
  ngOnInit() : void{
    const currentdate = new Date();
    this.currentYear = currentdate.getFullYear();
  }
  
}
