import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  template: `
     <div class="container">
        <h2>Lazy Loaded Component</h2>
        <p>
          <strong>
            {{message}}
          </strong>
        </p>
     </div>
  `
})

export class SampleComponent implements OnInit {
  message:string;
  constructor() {
    this.message = 'I am a Lazy Loaded Component';
   }

  ngOnInit() { }
}
