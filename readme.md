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

- angular.json
  - This the Main Angular Configuration File
    - Build Dependencies
      - Start Build from main.ts
      - @angular-devkit/build-angular:browser
        - The Angular CLI Development Server that will build the Project and will load the JS file in Browser
        - polyfills
          - zone.js
            - Optimize the JS in Browser
            - Monitor any Runtime Errors
        - tsconfig.app.json
          - TypeScript Transpilation Configuration
        - The "styles" isn angular.json is an array that contains CSS references        
    - Test Dependencies
    - Runtime or Production Dependencies

# Angular Application Development
- Component Creation Practices
  - Do not initialize or perform 'Time-Consuming-Heavy-Logic' in Constructor
  - Let the Component class implement the 'OnInit' interface
  - This interface contains 'ngOnInit()' method, this will be 'auto-invoked' immediately after constructor
  - IMP***
    - If dynamically generating UI based on public members of the TypeScrtipt class, then the TypeScript class MUST define an 'indexer-property' that will execute the 'for..of' loop on it  
- Creating Re-Usable Component aka Creation of Component Directives
  - Parent Child Communication
  - Guideline for Creating Re-Usable Components
    - Plan for the UI
    - Plan for public properties those who will accept data from its parent and render UI
      - The '@Input()' decorator from '@angular/core'
        - The @Input is always applied on public set property
        - This will be used for 'Property-Binding'
          - e.g.  <Child-Component [PROPERTY-NAME]="DATA-FROM-PARENT"/>
    - Plan for methods and events, in such a way that these method will be executed at Component level and using event the data will be emitted from Child to parent
      - An '@Output()' decorator that will be applied on 'EventEmitter<T>', both are from '@angular/core'
        - The T is the data-type to be send from Child to the Parent
        - The EventEmitter is sued by the Parent for 'Event-Binding', by subscribing it by a method from the Parent Component
          - <Child-Component (EVENT-EMITTER-FROM-CHILD)="method-from-parent()"/>
          - The EventEmitter has 'emit()' method to emit data 
- Working with Forms  
  - Model-Driven-Forms aka Data-Driven-Forms
    - ReactiveForms
      - They are the Forms which will be set or assign behavior based on the Model class and its properties passed to it  
        - This proves that Angular is MVC
    - Implementation of Reactive Forms
      - @angular/forms
        - ReactiveFormsModule
          - The Module that provides a container for Model-Driven-Forms
            - Classes
              - AbstractControl
                - A Base class for Each Editable UI element
              - FormGroup
                - A Collection of Editable Forms Elements under the <form> tag
              - FormControl
                - A Single Editable Element under the <form> tag    
              - Validators
                - A Class that contains methods for validations
                  - required(AbstractControl), requiredTrue(AbstractControl), min(number), max(number), minLength(number), maxLength(number), pattern(string|RegEx), email(AbstractControl). etc.
                    - IMP**: The method that accepts AbstractControl as input parameter need tgo not to pass any parameter explicitly while calling, instead the value will be directly read from the property for which the validator method is called   
                  - compose([Array-of-Validation-Rules]), composeAsync()
                  - All these are static methods  
                    
            - Attribute Directives
              - [formGroup]
                - Applied on <form> tag, this will implicitly create an instance of 'ngForm'
                   - The 'ngSubmit' event that is map each FormControl to Model class property
              - formControlName, the mapping between public property of the Model class with the editable HTML element
        - ReactiveFormsModule MUST be imported into the 'imports' array of NgModule    
        - Define Validation Rules on Model class properties and store them in FormGroup instance
        
          -  frmGroup = new FormGroup({FormControlName:new FormControl(Model.Property, Validators.compose([VALIDATION-RULES]))});  
              - FormControlName: Applied on Editable element to 'LINK-EDITABLE-ELEMENT-WITH-MODEL-PROPERTY'
          - Apply validations on UI element
             - <input type="text" formControlName="FormControlName">
              - The 'input' element will be coupled with Model property along with its validation rules
        - Showing Error Messages on UI
          - [formGroup].controls, the FormsControllCollection
            - formGroup: The FormGroup Instance Name bound with the [formGroup] directive of <form> tag
          - [formGroup].controls.[formControlName], a specific editable element
            - formControlName: is the 'FormControlName' used while defining validations on Model class Property
          - [formGroup].controls.[formControlName].dirty: This means that the element is changed  
          - [formGroup].controls.[formControlName].valid: The Value id valid
          - [formGroup].controls.[formControlName].invalid: The value is invalid
          - [formGroup].controls.[formControlName].errors.[validation-type]: The Error Object
            - [validation-type] is the validation that is failed
              - e.g. required, min, max, minlength, maxlength, pattern, custom validator, etc.    
        - The 'Value' Property
          - Common to FormGroup and FormControlName
          - FormGrpup.Value: The Value of Each FormControlName in the Form
          - FormControlName.Value: The value of each editable element bound with the formControlName 
        - The 'setValue()' method
          - This uis used to assign data to FormGroup and FormControl       
    - Rules for Writing Custom Validators
      - The Method MUSt be Static
      - The Method will return 'null' if the value is valid else it will return the JSON object
      - The Method will accepts input parameter as 'AbstractControl'  to read the value for Validation       

- Creating Directive
  - They are the re-usable set of UI/UX behavior that we want to use it across various components
  - Guidelines for Custom Directive 
    - Understand the UI/UX Behavior
      - Target Elements of which behavior will change
    - Plan for Properties those will be set by the directive utilizer (Component)
    - Plan for Events those will be used to activate Directive
  - Practical Implementation
    - The 'Directive' decorator from @angular/core is used to define directive
    - The @Input decorator MUST be used by the properties to accept data from the utilizer (Component)
    - If the Directive is used for the Property-Binding (MOST OF THE CASES) then there will be 'selector' as follows
        - @Directive({selector: '[SELECTOR]'})
    - Since directive is applied on HTML Element, we need 'ElementRef' class from @angular/core
      - This will locate an HTML element from Component and execute the Directive
    - Since the HTML element will update its rendering we need 'Renderer2' from @angular/core to generate modified rendering for the element          
    - To activate the Directive we need methods those are executed based on events. To host an event for a method we need the 'HostListener' from @angular/core 
- Http Communication from Angular Application
  - rxjs
    - Reactive Extension for JavaScript
    - This is an operator model that encapsulates complex promise based operations and on the behalf of receiver of the promise object, the promise object subscription is managed by the 'RxJs Observer'
  - zonejs
    - Help the polyfills to supports the Execution
  - tslib
    -  The TypeScript support during the transpilation (ES 7/8/9) 
  - Use @angular/common/http
    - Import HttpClientModule in the @NgModule
      - This will resolve 'HttpClient' object and this will be injected in the Angular Service using Constructor injection
      - This service will contain code for Http Operations   
  - Promise.then((r)=>{ fn()->Promise }).then((r)=>{fn()->}).then()    
- Single-Page-Application (SPA)       
  - @angular/router
    - RouterModule
      - Container for SPA 
      - forRoot(Raoute-Table)
        - Load the Routing Object Model at the Module level
        - When the Angular Module is bootstraped (loaded in browser), the Router Object Model will be immediately initialized
      - forChild(Route-Table)
        - Used for Lazy-Loading   
    - Routes
      - The Route Table
      - This is a collection of 'Route'
    - Route
      - A descriptive entry for SPA for Navigation
      - Following are properties of Route
        - path: The navigation URL
        - component: The component to navigate to
        - children: For Sub-Routing aka Child Routing
        - redirectTo: The default redirect when the path does not match
        - loadChildren: The Lazy Loading
          - Execute Asynchronously for loading the Module with Components
    - Router
      - The Explicit Route Navigation using Code    
        - The 'navigate(['path', route-parameters])'
    - ActivatedRoutes
      - Used for Parameterized Routing
    - routerLink
      - An Attribute directive to query to router table for routing navigation
      - This accepts and array with the first parameter as URL i.e. 'path' and rest all parameters as URL Parameters
      - [routerLink]=['URL']
      - This is applied to 'a' anchor tag
    - router-outlet
      - Component Directive for loading and rendering components based on the Route Path
    - Lazy-Loading
      - A Mechanism using which the Angular Module (with all of its dependencies ) will be loaded on demand
        - Once it is loaded it will be cached
        - The 'Route' class
          - The 'loadChildren'
            - Discover and Load the module asynchronously
          - loadChildren will load the module lazily but this module MUST use/import the 'CommonModule'
            - CommonModule
              - Used to inform to the BrowserModule that all components from the current module can be used for rendering
              - IMP****
                - An Angular application can load 'Only-One-Instance' of BrowserModule 
     
    - Guards  
      - The 'CanActive' property of 'Route' class is used to verify if the Routing is enabled / shown to the user
        - THis will accept an array that contains a Angular Service Type to verify the Route Access
  # Angular Test using Jest
  - install dependencies
    - npm install --save-de jest jest-preset-angular
    -  npm i --save-dev @types/jest
    - npm install -g jest

- Modify the test.ts with the configuration for JEST Testing

```javascript
// lets inform to the angular.json that the 'jest' will be used instead of karms
// Configure jest with In-Memory map for the DOM which will use the
// CSS, DOCTYPE and the Body for traversing through HTML Elements

import 'jest-preset-angular';

// Configure the CSS property for window object in the memory

Object.defineProperty(window, 'CSS', { value: null });

// define a doctype that will be used to point to the beginning
// of the HTML DOM Created in the memory

Object.defineProperty(document, 'doctype', {
  value: `<!DOCTYPE html>`,
});

// define a transform property to Body so that HTML elements will be
// traversed and based on events and data the body can be changed

Object.defineProperty(document.body.style, 'transform', {
  value: ()=>{
    return {
       enumerable: true, // Enabling Iteration over HTML DOM for element changes (binding)
       configurable: true // allowing changes into the DOM based on events and Binding
    };
  }
});

```

- modifications in tsconfig.spec.json

```javascript
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest", /* Engine used by Angular to Test*/
      "node" /* The Runtime to Execute Test Engine*/
    ],
    "esModuleInterop": true, /* Use and manage dependencies used in test code */
    "emitDecoratorMetadata": true /* The test will use and compile the Angular decorators */
  },
  "files": [
    "src/test.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

```

- IMP*** Make sure that, comments in .json files are removed because Jest does not allow it

- add jest.config.js for the Test Confoguration

```javascript
// the jest configuration file will be used to define
// the integration between Jest and Angular so that when the Jest runs
// Angular Test files will be transpiled and if any rendering is needed
// it will be executed through the memory JSDOM

// Read all JS/TS modules with their paths and transpile them
const {pathsToModuleNameMapper} =  require('ts-jest/utils');
// use the compileOption to transpile
const {compilerOptions} = require('./tsconfig.spec.json');

// Lets write Configuration

module.exports ={
  preset: 'jest-preset-angular', // load the JEST and Angular Integration
  roots: ['<rootDir>/src'], // Start reading files from rootDir/src folder, this is an application folder
  testMatch: ['**/+(*.)+(spec).+(ts)'], // the test file name
  setupFilesAfterEnv:['<rootDir>/src/test.ts'] , // the file for test config
  collectionCoverage: true, // use the code coverage
  coverageReporters: ['html'], // html file showing coverage data
  coverageDirectory: 'coverage/my-ng-app', // directory where coverage file will be created
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: '<rootDir>/'
  }) // start the transpilation for all modules and its dependencies from the root
};

```

