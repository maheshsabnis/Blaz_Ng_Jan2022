import {Injectable} from '@angular/core';

// providedIn: will be used to AUTO-REGISTER the
// service in the DI Container
@Injectable({
    providedIn:'root'
})
export class StringUtilityService {
    getLength(str:string):number {
        return str.length;
    }
    changeCase(str:string, c:string):string {
        if(c === "U" || c === "u") return str.toUpperCase();
        if(c === "L" || c === 'l') return str.toLowerCase();
        return str;
    }
}