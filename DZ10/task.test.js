import { regEx } from "./task";

describe("regular expressions", () => {
    it("case 1", () => {
      jest.spyOn(window,'prompt').mockReturnValue('30-10-1998');
      expect(regEx()).toEqual(console.log("It's a date!"));
    });

    it("case 2", () => {
        jest.spyOn(window,'prompt').mockReturnValue('mail@mail.ru');
        expect(regEx()).toEqual(console.log("It's email!"));
    });

    it("case 3", () => {
        jest.spyOn(window,'prompt').mockReturnValue('79162236565');
        expect(regEx()).toEqual(console.log("It's phone number!"));
    });

    it("case 4", () => {
        jest.spyOn(window,'prompt').mockReturnValue('something');
        expect(regEx()).toEqual(console.log("Brrrr, something else"));
    });

});