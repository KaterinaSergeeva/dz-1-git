import { circleAttributes } from "./task2";

describe("lenght and square", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('4');
      expect(circleAttributes()).toEqual(console.log("Length = 25; Square = 50"));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('12');
        expect(circleAttributes()).toEqual(console.log("Length = 75; Square = 452"));
      });

  });