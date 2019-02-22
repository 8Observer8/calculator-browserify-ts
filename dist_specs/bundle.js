(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.Add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var calculator_1 = require("../src_client/calculator");
describe("Calculator", function () {
    it("Add_PositiveNumbers_ReturnsSum", function () {
        // Arrange
        var a = 9;
        var b = 1;
        var expectedSum = 10;
        // Act
        var actualSum = calculator_1.Calculator.Add(a, b);
        // Assert
        expect(actualSum).toBe(expectedSum);
    });
});

},{"../src_client/calculator":1}]},{},[1,2]);
