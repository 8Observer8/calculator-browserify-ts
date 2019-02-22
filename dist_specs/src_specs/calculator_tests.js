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
//# sourceMappingURL=calculator_tests.js.map