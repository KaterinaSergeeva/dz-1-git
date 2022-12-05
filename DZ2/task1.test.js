import { largestNumber } from "./task1";

describe("which is largest", () => {
    it("case 1", () => {
      expect(largestNumber(3,4)).toEqual(console.log(4));
    });
    it("case 2", () => {
        expect(largestNumber(10,2)).toEqual(console.log(10));
    });
    it("case 3", () => {
        expect(largestNumber(-2,-10)).toEqual(console.log(-2));
    });

  });