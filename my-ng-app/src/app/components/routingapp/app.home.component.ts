import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-component',
  template: `
     <div class="container">
       <h2>The Home Component</h2>
       <table>
         <tbody>
         <tr>
              <td colSpan="3">
                 <input type="text" [(ngModel)]="id" class="form-control">
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button (click)="navigateToContact()">Navigate to Contact</button>
              </td>
            </tr>

         </tbody>
       </table>
     </div>
  `
})

export class HomeComponent implements OnInit {
  id:number;
  constructor(private router:Router) {
    this.id =0;
  }

  ngOnInit() { }


  navigateToContact():void {
    // explicit Navigation
    this.router.navigate(['contact', this.id]);
  }
}
