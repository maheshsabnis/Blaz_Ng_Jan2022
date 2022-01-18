import { Component, OnInit } from '@angular/core';
import {StringUtilityService} from './../../services/app.utility.service';
@Component({
  selector: 'app-utilityservice-component',
  template: `
     <div class="container">
       <h2>Component using Utility Service</h2>
        <div class="container">
              <p>{{length}}</p>
              <br/>
              <p>
                {{str}}
              </p>
        </div>
        <hr/>
        <button class="btn btn-warning" (click)="getLength()">Get Length</button>
        <br/>
        <button class="btn btn-primary" (click)="upperCase()">Change To Upper Case</button>
        <br/>
        <button class="btn btn-success" (click)="lowerCase()">Change To Lower Case</button>
     </div>
  `
})
export class UtilityServiceComponent implements OnInit {
  str:string;
  length:number;

  // Inject the service into the Constructor
  constructor(private serv: StringUtilityService) {
    this.str = "The String Utility Service";
    this.length = 0;
  }

  ngOnInit(): void { }

  getLength():void {
     this.length = this.serv.getLength(this.str);
  }

  upperCase():void {
    this.str = this.serv.changeCase(this.str, 'U');
  }

  lowerCase():void {
    this.str = this.serv.changeCase(this.str, 'L');
  }

}
