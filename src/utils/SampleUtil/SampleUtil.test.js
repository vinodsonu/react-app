import { add } from '.';

describe("add tests", () => {
    it("should return sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("should return sum 0 for sum of negative numbers", () => {
        expect(add(-1, -2))
    })
});
