"use strict";
var p = { first: "Jane", last: "Jacobs" };
var email = function (p, subject, body) {
    return new Response();
};
var Cylinder = /** @class */ (function () {
    function Cylinder() {
        this.radius = 1;
        this.height = 1;
    }
    return Cylinder;
}());
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        shape; // It's type is Cylinder!
        shape.radius; // It's type is number!
    }
}
var type = typeof Cylinder;
console.log(type);
var v1 = typeof p;
var v2 = typeof email;
