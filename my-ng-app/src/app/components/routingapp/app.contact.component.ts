import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contact-component',
  template: `
     <div class="container">
       <h2>The Contact Component</h2>
       <div class="container">
         <strong>
           Received Value is {{value}}
         </strong>
       </div>
     </div>
  `
})

export class ContactComponent implements OnInit {

  value:number;


  // Inject the ActivatedRoute so that the
  // Subscription to the Route expression is executed
  // and route parameter is read
  constructor(private act:ActivatedRoute) {
    this.value = 0;
  }

  ngOnInit() {
     // lets subscribe to the Route URL and Read route parameter
     // Use 'param' to read parameter vale from URL
     this.act.params.subscribe((param)=>{
       console.log(`Parameters is = ${param}`);
       this.value = param['id'];
     });
  }
}
