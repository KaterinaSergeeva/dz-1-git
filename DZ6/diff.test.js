import { diff } from "./diff";

describe("diff", () => {
    it("is a difference 1", () => {
      expect(diff(2,10)).toEqual(8);
    });

    it("is a difference 2", () => {
        expect(diff(2,-10)).toEqual(12);
    });

    it("is a difference 2", () => {
        expect(diff(0,-1)).toEqual(1);
    });
  });