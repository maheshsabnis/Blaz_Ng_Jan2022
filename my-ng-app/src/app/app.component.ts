import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public name:string;
    roles:Array<string>;
    selectedRole:string;
    toggle:boolean;

    constructor(){
      this.name = "Mahesh"
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
      this.name = "Mahesh Sabnis";
    }

    updateToggle():void{
      this.toggle = !this.toggle;
    }
}
