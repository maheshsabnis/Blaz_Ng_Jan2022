import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mainrouting-component',
  template: `
     <div class="container">
       <h2>The Angular SPA DEMO </h2>
       <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>
                <a [routerLink]="['']">Home</a>
              </td>
              <td>
                <a [routerLink]="['about']">About</a>
              </td>
              <td>
                <!--The Route Parameter-->
              <a [routerLink]="['contact', id]">Contact</a>
              </td>
            </tr>

          </tbody>
       </table>
       <hr/>
       <router-outlet></router-outlet>
     </div>
  `
})

export class MainRoutingComponent implements OnInit {
  id:number;
  // inject Router to perform an explicit navigation
  constructor(private router:Router) {
    this.id = 1000;
   }

  ngOnInit() { }

}
