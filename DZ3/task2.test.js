import { multiplicationTableFor7 } from "./task2";

describe("multiplication table for 7", () => {
    it("case 1", () => {
      expect(multiplicationTableFor7()).toEqual(console.log('7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63'));
    });

  });