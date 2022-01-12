import {Component, OnInit} from '@angular/core';
import {Categories,Manufacturers} from './../../models/constants';
import {ProductLogic, ProductInfo} from './../../models/logic';

@Component({
    selector: 'app-product-component',
    templateUrl:'app.product.view.html'
})
export class ProductComponent implements OnInit{
    products:Array<ProductInfo>;
    product: ProductInfo;
    private logic:ProductLogic;
    categories = Categories;
    manufacturers = Manufacturers;
    columnHeaders:Array<string>;
    constructor(){
        this.product = new ProductInfo(0,'','','','','',0);
        this.products= new Array<ProductInfo>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();    
        console.log('Constructor Called');
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
    }
    save():void {
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