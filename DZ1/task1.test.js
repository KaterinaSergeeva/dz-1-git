import { sumAndWork } from "./task1";

describe("sumAndWork", () => {
    it("is a sum and composition 1", () => {
      expect(sumAndWork(2,10)).toEqual(console.log(12,20));
    });
    it("is a sum and composition 2", () => {
        expect(sumAndWork(-2,10)).toEqual(console.log(8,-20));
    });
    it("is a sum and composition 3", () => {
        expect(sumAndWork(-2,-10)).toEqual(console.log(-12,20));
    });

  });