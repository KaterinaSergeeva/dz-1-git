import { dayOfWeek } from "./task1";

describe("day of week", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('30.10.2022');
      expect(dayOfWeek()).toEqual(console.log("Sunday"));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('05.12.2022');
        expect(dayOfWeek()).toEqual(console.log("Monday"));
    });

  });