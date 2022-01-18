import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {
  notify:EventEmitter<any>;
  constructor() {
    this.notify = new EventEmitter<any>();
  }

  onDataUpdate(id:number):void {
    // emit the event
    if(id !== undefined || id === 0)
        this.notify.emit(id);
  }

}
