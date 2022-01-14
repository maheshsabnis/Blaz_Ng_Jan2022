import {Component, OnInit} from '@angular/core';
// import classes for FormGroup, FormController and Validators
import { FormGroup, FormControl, Validators } from "@angular/forms"; 

import {Categories,Manufacturers} from '../../models/constants';
import {ProductLogic, ProductInfo} from '../../models/logic';
// importing the custom validator
import {CustomValidation} from './app.custom.validators';

@Component({
    selector: 'app-productform-component',
    templateUrl:'app.productform.view.html'
})
export class ProductFormComponent implements OnInit{
    products:Array<ProductInfo>;
    product: ProductInfo;
    private logic:ProductLogic;
    categories = Categories;
    manufacturers = Manufacturers;
    columnHeaders:Array<string>;
    color:string;

    // The ReactForms Object Model definition
    frmProduct:FormGroup;



    constructor(){
        this.product = new ProductInfo(0,'','','','','',0);
        this.products= new Array<ProductInfo>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();    
        console.log('Constructor Called');
        this.color = '';

        // create a formgroup that will create Name:value pair for the mapping with Model class properties 
        // Name: This will be a string and it will be bound with the 'formControlName' attribute of Editable 
        // Elements in the form
        // value: The FormControl() instance that will accept Model class public property and validation rule
        
        this.frmProduct = new FormGroup({
            ProductRowId: new FormControl(this.product.ProductRowId,
                 Validators.compose([
                     Validators.required,
                     Validators.minLength(2),
                     Validators.maxLength(10),
                     Validators.pattern('[0-9]+'),
                     CustomValidation.checkEven   
                 ])),
            ProductId: new FormControl(this.product.ProductId),
            ProductName: new FormControl(this.product.ProductName),
            CategoryName: new FormControl(this.product.CategoryName),
            Manufacturer: new FormControl(this.product.Manufacturer),
            Description: new FormControl(this.product.Description),
            BasePrice: new FormControl(this.product.BasePrice)
        });
    }
    // the method from OnInit interface
    ngOnInit(): void {
        console.log('ngOnInit Called');
        // Read all public members of the ProductInfo class
        this.columnHeaders = Object.keys(this.product);
        this.products = this.logic.getProducts();
    }

    clear():void{
        this.product = new ProductInfo(0,'','','','','',0);
        this.frmProduct.setValue(this.product);
    }
    save():void {
        this.product = this.frmProduct.value;
      
        this.products = this.logic.registerProduct(this.product);
    }

    // getSelectedProduct(prd:ProductInfo):void {
    //     // this.product = prd;
    //     // a new blank object is created and then data and schema from prd is copied in it
    //     this.product = Object.assign({}, prd);
    // }

    getSelectedProduct(event:any):void {
        // read value received from the event 
        console.log(event);
        this.product = event;
    }

}