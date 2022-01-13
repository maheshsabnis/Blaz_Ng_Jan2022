import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-datagrid-component',
    templateUrl:'./app.datagrid.view.html'
})
export class DataGridComponent{
    private dataSource:Array<any>;
    columnHeaders:Array<string>;
    private _applyColor:string;
    @Output()
    notify:EventEmitter<any>;
    constructor(){
        this.dataSource = new Array<any>();
        this.columnHeaders = new Array<string>(); 
        this.notify = new EventEmitter<any>();
        this._applyColor = '';
    }


    // parent component will accept it as
    // <app-datagrid-component [DataSource]=""> 

    @Input()
    set DataSource(value:Array<any>) {
        if(value.length > 0) {
            this.dataSource = value;
            // read all keys of 0th record of the received data
            this.columnHeaders = Object.keys(this.dataSource[0]);
        } else {
            this.dataSource = [];
        }
    }
    get DataSource():Array<any> {
        return this.dataSource;
    }

    @Input()
    set applyColor(val:string){
        this._applyColor = val;
    }
    get applyColor():string {
        return this._applyColor;
    }


    // Method bind with UI on Child 
    onRowClick(row:any):void {
        console.log(`Selected Data = ${JSON.stringify(row)}`);
        
        // the 'row' will be emitted
        this.notify.emit(row);
    }
}