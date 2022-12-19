var Cone = /** @class */ (function () {
    function Cone(r, l) {
        var _this = this;
        this.shapename = "Cone";
        this.printname = function () {
            return _this.shapename;
        };
        this.area = function () {
            return 3.14 * _this.r * (_this.r + _this.l);
        };
        this.r = r;
        this.l = l;
    }
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(r) {
        var _this = this;
        this.shapename = "Sphere";
        this.printname = function () {
            return _this.shapename;
        };
        this.area = function () {
            return 4 * 3.14 * _this.r * _this.r;
        };
        this.r = r;
    }
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(b, l) {
        var _this = this;
        this.shapename = "Rectangle";
        this.printname = function () {
            return _this.shapename;
        };
        this.area = function () {
            return _this.l * _this.b;
        };
        this.b = b;
        this.l = l;
    }
    return Rectangle;
}());
var rec = new Rectangle(12, 23);
var cone = new Cone(5, 12);
var sphere = new Sphere(23);
console.log(rec.printname());
console.log(rec.area());
console.log(cone.printname());
console.log(cone.area());
console.log(sphere.printname());
console.log(sphere.area());
