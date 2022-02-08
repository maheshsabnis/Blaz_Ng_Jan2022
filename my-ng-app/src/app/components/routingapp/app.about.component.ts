import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  template: `
     <div class="container">
       <h2>The About Component</h2>
       <a [routerLink]="['product']">Product</a>
       <hr/>
       <router-outlet></router-outlet>
     </div>
  `
})

export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
