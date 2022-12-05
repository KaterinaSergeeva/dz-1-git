import { isWord } from "./isWord";

describe("diff", () => {
    it("is word 1", () => {
      expect(isWord('Hello')).toEqual(true);
    });

    it("are two words", () => {
        expect(isWord('Aaron Stone')).toEqual(false);
    });

    it("are three words", () => {
        expect(isWord('Steven Grant Rogers')).toEqual(false);
    });
  });