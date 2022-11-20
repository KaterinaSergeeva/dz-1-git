import { pow } from "./pow.js";

describe("pow", () => {
  it("is a power", () => {
    expect(pow(2,10)).toEqual(1024);
  });


});