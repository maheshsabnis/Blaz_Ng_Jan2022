import {Directive, Input, ElementRef, Renderer2, HostListener} from '@angular/core';
// The HTML element will be applied with this directive like below
// <input type="button" [setColor]=""/>
@Directive({
    selector: '[setColor]'
})
export class ColorDirective {

    // ElementRef and Renderer2 will e resolved by the BrowserModule
    // when the directive is declared in 'declaration:[]' array of the
    // NgModule 
    constructor(private ele:ElementRef, private renderer:Renderer2){
        this.setColor = '';
    }

   // Link the Input decorated property with the .
   // selector name 
   @Input('setColor')setColor:string;
   
   // a private method that is logic of the Directive
   // Update backgroundColor of the element on which the Directive is applied
   // based on events
   private applyColor(color:string):void {
       this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', color);
   }

    // public method those will invoke logic when events to activate directive
   // will be dispatched by the component where this directive is used

   @HostListener('mouseenter')
   onMouseEnter(){
       this.applyColor(this.setColor);
   }
   @HostListener('mouseleave')
   onMouseLeave(){
       this.applyColor('');
   }
}