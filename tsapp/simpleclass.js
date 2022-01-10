var SimpleClass = /** @class */ (function () {
    function SimpleClass(a, b) {
        this.x = a;
        this.y = b;
    }
    SimpleClass.prototype.power = function () {
        if (this.validate()) {
            this.z = Math.pow(this.x, this.y);
        }
        else {
            this.z = 0;
        }
        return this.z;
    };
    Object.defineProperty(SimpleClass.prototype, "Name", {
        get: function () {
            return this.name.toUpperCase();
        },
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    SimpleClass.prototype.validate = function () {
        if (this.x < 0 || this.y < 0) {
            return false;
        }
        return true;
    };
    return SimpleClass;
}());
var obj = new SimpleClass(10, 5);
console.log("result = ".concat(obj.power()));
var obj1 = new SimpleClass(-10, 9);
console.log("result = ".concat(obj1.power()));
obj1.Name = 'Mahesh';
console.log("Name = ".concat(obj1.Name));
