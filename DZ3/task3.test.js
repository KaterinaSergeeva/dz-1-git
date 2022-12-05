import { mean } from "./task3";

describe("mean", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('10');
      expect(mean()).toEqual(console.log(5));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('20');
        expect(mean()).toEqual(console.log(10));
    });

  });