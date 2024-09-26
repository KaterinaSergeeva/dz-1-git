import { symbolCount } from "./task2";

describe("number of symbols", () => {
    it("case 1", () => {
      expect(symbolCount('hello','world')).toEqual(console.log(10));
    });
    it("case 2", () => {
        expect(symbolCount('My name is ','Thomas Shelby')).toEqual(console.log(24));
    });
    it("case 3", () => {
        expect(symbolCount('-2','-10')).toEqual(console.log(5));
    });

  });