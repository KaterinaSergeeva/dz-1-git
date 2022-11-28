import { massives } from "./task";

describe("massives operations", () => {
    it("case 1", () => {
      expect(massives([1,2,3,4,5,6,7,8,9,10])).toEqual(console.log(10,1));
    });
    it("case 2", () => {
        expect(massives([10,20,30,40,-50,60,7,8,96,10])).toEqual(console.log(96,-50));
    });
    it("case 3", () => {
        expect(massives([8,2,0,4,9,6,7,-8,9,1])).toEqual(console.log(9,-8));
    });

  });