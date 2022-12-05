import { sumInputNubers } from "./task3";

describe("day of week", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('111');
      expect(sumInputNubers()).toEqual(console.log(3));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('125');
        expect(sumInputNubers()).toEqual(console.log(8));
    });

  });