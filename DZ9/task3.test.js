import { equation } from "./task3";


describe("solving equation", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('1,-5,4');
      expect(equation()).toEqual(console.log("X1 = 1, X2 = 4"));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('2,3,2');
        expect(equation()).toEqual(console.log("No valid roots"));
      });

      it("case 3", () => {
        jest.spyOn(window,'prompt').mockReturnValue('2,-4,2');
        expect(equation()).toEqual(console.log("X = 1"));
      });

});