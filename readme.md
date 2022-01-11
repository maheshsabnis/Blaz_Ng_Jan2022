# TypeScript

- Language by Microsoft for ES 6 based application development

- ES 6 Features implemented in TypeScript
  - Scope Definitions using 'let' keyword (say goodbye to 'var')
  - String Interpolation aka Template string aka Immutable String Object definition
  - Arrow Operators
  - Data Types
    - Number, String, Object, Array<T>, Date, any (default), void (used by the method that does not returns anything)
    - enum
    - Union Types  
      - Declaring a varibale with More than one Datatype
  - Array Class with Various methods
    - push(), pop(), shift(), unshift(), sort(), reverse(), filter(), forEach(), map(), reduce(), etc.
    - Using Array<T> generic class
      - T can be TypeScript Supported Datatype
  - String class with Various methods
    - substr(), subString(), replace(), search(), etc.
  - Type Definitions
    - Creating the custom datatype definition based on multiple Standard types
  - rest parameters aka spread operators
    - used to pass multiple variable number of parameters to a method
    - Used by mutating the object by adding new values /  properties in existing object
  - Object Oriented Programming
    - Class
      - Access Specifiers
      - private, public, protected
      - default access specifier for methods is public
    - Generics
    - Interfaces

# Programming with TypeScript

    - Create a package.json
        - A file that configure the ES based projects (Front0End and Server-Side)
    - The Machine MUST Node.js
        - This will provide the 'npm' utility
        - Create a package.json using following command 
                - npm init
                    - Command line Wizard to create a package.json
                - npm init -y | npm init -f
                    - Create a package.json with defaults
    - Install TypeScript in Global Scope
        - npm install -g typescript                
            - This will provide the 'tsc' utility
            - This utility will be used to transpile TypeScript into JavaScript
                - tsc [Source-TypeScript].ts  
        - If the TypeScript transpilation is failing then do not forcefully use the transpiled JavaScript for production
            - This may result into App Crash or Memory-Leaks         

# Angular Programming

- Using Angular CLI
  - Ready Project to create an Angular Application
  - @angular/cli
    - npm install @angular/cli
  - This will provide 'ng' utility
    - Utility for Managing Angular Application as follows
      - Create Angular Application
        - ng new [NAME-OF-THE-APP]
        - e.g. ng new my-ng-app
      - ng serve
        - Build the Project and Host it on default Node Server on default port as 4200
      - ng build
        - Dev. Build
        - ng build --prod
          - Production Build
      - ng test
        - Run Angular test

# Angular Folder Structure

- package.json
  - "@angular/animations"
    - Animation
  - "@angular/common"
    - Loading of Angular Modules
  - "@angular/compiler"
    - Validate and Compile Angular Object Model
  - "@angular/core"
    - Most of Standard Angular Objects are here
    - NgModule
      - A Decorator applied on TypeScript class to define it as Angular Module
      - Angular Module is a Container for Component, Directives, Services, Pipes and other Custom Classes
      - Properties
        - imports: Of the Type Array, that imports various Standard Modules and External Modules to run the current NG Application
        - declarations:  Of the Type Array, used to declare all component , directive of the current Module so that they are instantiated when the current module is loaded
        - providers:  Of the Type Array, used to provide a dependency container to register all Angular Services in current NG Module
        - bootstrap:  Of the Type Array, used to define which components from 'declarations' will be loaded and rendered in browser using BrowserModule
    - Component
      - A Decorator applied on TypeScript class to define it as Angular Component
      - Properties
        - selector: The CUSTOM-HTML-TAG that will be used to refer the component for rendering
        - template: The inline HTML DOM aka UI for the Component
        - templateUrl: External html file that contains the UI
        - styles: Inline CSS Styles
        - styleUrls: Array of External CSS files used by the component
      - When the App is rendered, to Execute the component follow steps as
        - Make sure that the Component is declared in NgModule in its 'declarations' array
        - Make sure that the component  is added in 'bootstrap' array of NgModule
        - Make sure that the 'selector' value of the component is used as Custom HTML element in index.html  
    - Directive
      - A Decorator applied on TypeScript class to define it as Angular Directive
    - Pipe
      - A Decorator applied on TypeScript class to define it as Angular Custom Pipe
    - Injectable
      - A Decorator applied on TypeScript class to define it as Angular Service for creating Reusable Utilities e.g. Http Calls
    - Input
      - A Decorator applied on Property of a TypeScript class to define it as property that will accept input from Parent-Component
    - Output
      - A Decorator applied on the EventEmitter<T> class  to define and event to emit data from Child Component to Parent Component
        - EventEmitter<T>: Is a part of @angular/core
    - HostListener
      - A Decorator applied on method of the TypeScript class to indicate that the method will be executed when a specific event is raised
      - This will be used in Component and Directive creation
    - Renderer2
      - Manage a custom rendering of HTML DOM based on Event
      - Used in Creation of Custom Directive
    - Elementref
      - Class used to refer a HTML DOM on which the Directive is applied
      - USed in case of Custom Directives

  - "@angular/forms"
    - Used for Working with Angular Data-Driven-Forms
      - Pure MVC in Angular
    - FormGroup
      - Group of FormControls as a FormControlCollection
    - FormBuilder
      - Builds a FormGroup
    - FormControl
      - Each Editable element in HTML Form
  - "@angular/platform-browser"
    - Rendering of the Angular Application
    - BrowserModule
  - "@angular/platform-browser-dynamic"
    - Bootstrap the Angular Application
    - platformBrowserDynamic.bootstrapModule(ANGULAR-MODULE)
  - "@angular/router"
    - USed for Single Page Application
    - RouterModule
      - Represents Route Table, Route Navigation as well as The ROute Container

- Running the Angular Application
  - ng serve
- Angular Build Files
vendor.js             | vendor        |   2.00 MB |-->The Standard Angular packages build into single file
polyfills.js          | polyfills     | 339.24 kB |-->JS compilation of Angular Dependencies
styles.css, styles.js | styles        | 212.50 kB |-->CSS and JS objects of Compiled CSS into the browser
main.js               | main          |   7.42 kB |-->Compilation of Dev. Defined TS code into JS
runtime.js            | runtime       |   6.85 kB |-->The Angular CLI WebPack file that will load an activate Angular in browser

- Angular Databinding
  - String interpolation or Templates or Expression-Binding
    - Binding public property of the Component to HTML UI
      - e.g. Consider 'name:string' is a public proeprty
      - {{name}}
      - Read-only binding, means not changed from UI
  - Property Binding
    - Binding public property of the Component bound to Attribute of HTML element
      - NOTE: Angular have design new HTML parser that parse and executed HTML attributes
        - e.g., value, hidden, readonly, disabled, checked, etc.
      - Syntax
        - [ATTRIBUTE-OF-HTML-ELEMENT]="PUBLIC-PROPERTY"
      - e.g.
        - <input type="text" [value]="name">
        - The 'name' can not be changed from UI, One-Way from Component to UI  
  - Event-Binding
    - Bind a public method of the Component to UI Event
    - UI-to-Component
    - Syntax
      - (EVENT)="method()"
      - <button (click)="f1()"></click>
        - f1() is a public method from the component
  - Two-Way Binding
    - Combination of Property Binding + Event Binding  
    - The property is bound to Editable UI element, it can updated from UI to Component and component back to UI
    - [(ngModel)]="PUBLIC-PROPERTY-FROM-COMPONENT"
      - IMP**: To use 'ngModel', the 'FormModule' from @angular/forms Must be imported in the 'imports' array of the NgModule
      - NgModel will detect the 'DEFAULT-EVENT-OF-ELEMENT' e.g. <input type="text">, default event is KeyUp+Change
      - The default event will be suppressed by the 'ngModelChanged' event 
      - The ngModelChanged will read the latest value of HTML element and will send this value to Component's property that is bound with HTML element
      - Component will update itself and then will update the property with new value received from UI
      - COmponent will send updated value back-to-UI and UI will be updated 
  - Binding using the Directives (The reusable UI or the behavior)
    - 3 Types of Directives   
        - Component: Each COmponent is reusable UI element
        - Attribute Directive: USed to change the behavior of HTML element e.g. ngModel
        - Structural Directives: Modify the DOM (Add/Remove) based on Data Passed to it
            - *ngIf: Evaluate an If condition
            - *ngFor: Execute the for..of loop to generate UI