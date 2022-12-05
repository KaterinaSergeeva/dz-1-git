import { pow } from "./pow.js";

describe("pow", () => {
  it("is a power", () => {
    expect(pow(2,10)).toEqual(1024);
  });

  it("is a power 3", () => {
    expect(pow(-3,3)).toEqual(-27);
  });

  it("is a power 0", () => {
    expect(pow(3,0)).toEqual(1);
  });

});