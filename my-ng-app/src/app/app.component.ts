import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public name:number;
    roles:Array<string>;
    selectedRole:string;
    toggle:boolean;

    constructor(){
      this.name = 100
      this.roles = new Array<string>();
      this.selectedRole ='';

      this.roles.push('James Bond');
      this.roles.push('Jason Bourn');
      this.roles.push('Indiana Jones');
      this.roles.push('Ethan Hunt');
      this.roles.push('Jack Reacher');
      this.toggle = false;
    }

    display():void {
      this.name = 200
    }

    updateToggle():void{
      this.toggle = !this.toggle;
    }
}
