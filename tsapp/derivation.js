var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyBase = /** @class */ (function () {
    function MyBase(s) {
        this.str = s;
    }
    MyBase.prototype.getLength = function () {
        return this.str.length;
    };
    return MyBase;
}());
var MyDerive = /** @class */ (function (_super) {
    __extends(MyDerive, _super);
    function MyDerive(s) {
        var _this = _super.call(this, s) || this;
        _this.value = s;
        return _this;
    }
    MyDerive.prototype.changeCase = function (c) {
        if (c === 'U')
            return this.value.toUpperCase();
        if (c === 'L')
            return this.value.toLowerCase();
        return this.value;
    };
    return MyDerive;
}(MyBase));
var objX = new MyDerive('Mahesh');
console.log("Length = ".concat(objX.getLength()));
console.log("Upper Case = ".concat(objX.changeCase('U')));
console.log("Lower Case = ".concat(objX.changeCase('L')));
var objY = new MyDerive('Neeta');
console.log("Length = ".concat(objY.getLength()));
console.log("Upper Case = ".concat(objY.changeCase('U')));
console.log("Lower Case = ".concat(objY.changeCase('L')));
