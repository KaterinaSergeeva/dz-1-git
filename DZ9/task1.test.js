import { isRightTriangle } from "./task1";

describe("triangle is right", () => {
    it("case 1", () => {
      expect(isRightTriangle(3,4,5)).toEqual(console.log("Right triangle"));
    });
    it("case 2", () => {
        expect(isRightTriangle(5,12,13)).toEqual(console.log("Right triangle"));
    });
    it("case 3", () => {
        expect(isRightTriangle(1,2,3)).toEqual(console.log("Triangle is not rectangular"));
    });

  });