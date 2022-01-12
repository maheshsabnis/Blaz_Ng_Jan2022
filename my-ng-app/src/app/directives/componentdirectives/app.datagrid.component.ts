import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-datagrid-component',
    templateUrl:'./app.datagrid.view.html'
})
export class DataGridComponent{
    private dataSource:Array<any>;
    columnHeaders:Array<string>;

    @Output()
    notify:EventEmitter<any>;
    constructor(){
        this.dataSource = new Array<any>();
        this.columnHeaders = new Array<string>(); 
        this.notify = new EventEmitter<any>();
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

    // Method bind with UI on Child 
    onRowClick(row:any):void {
        console.log(`Selected Data = ${JSON.stringify(row)}`);
        
        // the 'row' will be emitted
        this.notify.emit(row);
    }
}