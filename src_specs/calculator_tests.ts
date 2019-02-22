import { Calculator } from "../src_client/calculator";

describe("Calculator", () =>
{
    it("Add_PositiveNumbers_ReturnsSum", () =>
    {
        // Arrange
        let a = 9;
        let b = 1;
        let expectedSum = 10;

        // Act
        let actualSum = Calculator.Add(a, b);

        // Assert
        expect(actualSum).toBe(expectedSum);
    });
});