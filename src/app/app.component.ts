import { Component } from '@angular/core';
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  isVisible= true
  myFunctions?:any
  constructor(public counterService:CounterService) {
    this.myFunctions =this.counterService
    console.log(this.myFunctions)
  }



}
