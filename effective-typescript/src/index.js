"use strict";
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
var v = { x: 4, y: 3, name: "OH" };
console.log(calculateLength(v));
