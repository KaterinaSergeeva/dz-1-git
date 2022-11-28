import { circleInSquare } from "./task3";

describe("circle in square", () => {
    it("case 1", () => {
      expect(circleInSquare(30,400)).toEqual(console.log("Круг поместится в квадрат"));
    });
    it("case 2", () => {
        expect(circleInSquare(10,2)).toEqual(console.log("Круг не поместится в квадрат"));
    });
    it("case 3", () => {
        expect(circleInSquare(3,4)).toEqual(console.log("Круг поместится в квадрат"));
    });

  });