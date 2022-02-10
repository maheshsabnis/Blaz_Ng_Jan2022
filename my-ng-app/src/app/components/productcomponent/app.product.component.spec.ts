import 'zone.js';
// import 'zone.js/testing';
import 'zone.js/dist/zone-testing';

// dependencies for the test
// TestBed will provide an execution to Angular Object (Component, Service) in Testing Env
// ComponentFixture: The Object that represents the Component (Component Class, HTML Template, Binding, etc.)
import {TestBed, ComponentFixture, async} from '@angular/core/testing';


// Import the component
import {ProductComponent} from './app.product.component';

// import all dependencies required by the ProductComponent
import {ProductInfo} from './../../models/logic';
// Since ProductComponent uses Two-way binding, we need FormsModule
import {FormsModule} from '@angular/forms';

// getTestBed: This provides an Environment for the JSDOM for Rendering
// the HTML using the BrowserModule
import { getTestBed } from '@angular/core/testing';
// BrowserDynamicTestingModule: This will used to manage the HTML Updates in the
// Memory with the detectChanges() method of the ComponentFixture
// platformBrowserDynamicTesting: This will load the a Current Application Module aka Bootstrap the Module
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { DataGridComponent } from './../../directives/componentdirectives/app.datagrid.component';
import { ColorDirective } from './../../directives/attributedirective/app.color.directive';

// In-Memory Angular Application Environment Initialization
// for testing
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// start Test code
// Test Suite
describe("ProductComponent Test",()=>{
  // 1. define component reference
  let component:ProductComponent;
  // 2. Define Component Fixture so that HTML Template, Binding will be accessible
  let fixture: ComponentFixture<ProductComponent>;
  // 3. Since the Test will dispatch an event on Html Element define a reference for it
  let button: HTMLElement;

  // perform an application initialization for Angular Module

  // this will be executed before every test case in a current suite
  beforeEach(async(()=>{

   // 4. Initialize Test Env.
    TestBed.configureTestingModule({
      declarations:[ProductComponent, DataGridComponent, ColorDirective],
      imports:[FormsModule]
    }).compileComponents(); // Testing Env. will be initialized with dependencies and compilation
    // of the Component, this will make sure that the Component's code and HTML template is compiled
    // successfully
  }));

  beforeEach(()=>{
    // 5. Create Component instance
    fixture = TestBed.createComponent(ProductComponent);
    // 6. Use the Component instance with its HTML, Property and Event and Two-Binding
    component = fixture.componentInstance;
    // 7. Initialize the Instance in-Memory for Default Binding and Rendering of HTML
    fixture.detectChanges();
  });

  // 8. the test case
  it("should calculate tax as 2% of the BasePrice",()=>{
      // 8.1 arrange: Gather the input information for testing
      let prd = new ProductInfo(0,'','','','','',0);
      // 8.2 set the BAsePrice
      prd.BasePrice = 5000;
      // 8.3 assign the prd to product property of the component
      component.product = prd;
      // 8.4 get the HTML DOM element in Memory which is the Component
      const nativeElement = fixture.nativeElement;
      // 8.5 Read the button
      button = nativeElement.querySelector('.btn-success');

      // 8.6 act: Invoke a functionality to be tested, for dispatching an event
      const eventType = button.dispatchEvent(new Event('click'));
      // 8.7: Monitor the DOM Changes In-Memory occurred because of an event
      fixture.detectChanges();

      // 8.8 Assertion: Verify the test execution
      expect(nativeElement.querySelector('input[disabled]').value).toEqual('100');

  });

});
