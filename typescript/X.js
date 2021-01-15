"use strict";
exports.__esModule = true;
exports.X = void 0;
var X = /** @class */ (function () {
    function X(x) {
        this.x = x;
    }
    X.prototype.setX = function (value) {
        this.x = value;
    };
    X.prototype.getX = function () {
        return this.x;
    };
    X.prototype.disp = function () {
        console.log("x est " + this.x);
    };
    return X;
}());
exports.X = X;
