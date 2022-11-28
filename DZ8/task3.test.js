import { whoIsYounger } from "./task3";

describe("who is younger", () => {
    it("case 1", () => {
      expect(whoIsYounger('30.10.1998','23.08.1999')).toEqual(console.log("Second is younger"));
    });

    it("case 2", () => {
        expect(whoIsYounger('06.05.1999','30.10.1998')).toEqual(console.log("First is younger"));
    });

    it("case 2", () => {
        expect(whoIsYounger('06.05.1999','01.03.2005')).toEqual(console.log("Second is younger"));
    });

  });