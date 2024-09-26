import { month } from "./task2";

describe("day of week", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('1');
      expect(month()).toEqual(console.log("January"));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('12');
        expect(month()).toEqual(console.log("December"));
    });

  });