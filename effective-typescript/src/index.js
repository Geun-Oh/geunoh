"use strict";
var C = /** @class */ (function () {
    function C(foo) {
        this.foo = foo;
    }
    C.prototype.abs = function () { };
    return C;
}());
var c = new C("instance of C");
var d = { foo: "object literal", abs: function () { } };
console.log(d instanceof C);
