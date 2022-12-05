import { todayMinutes } from "./task2.js";

describe("number of minutes today", () => {
    it("case 1", () => {
        const now = new Date();
        let nowMin = now.getHours()*60 + now.getMinutes();
      expect(todayMinutes()).toEqual(console.log(nowMin));
    });

  });