const reverseString = require("../task/reverseString");
const repeatWord = require("../task/reverseString");

xdescribe("tests for revertString function", () => {
  it("should reverse string", () => expect(reverseString("abc")).toBe("cba"));
});

describe("test for repeatWord function", () => {
  it("should repeat word n times", () => expect(repeatWord("hey", 3)).toBe("hey1, hey2, hey3, "));
  it("should repeat number n times", () => expect(repeatWord(1, 3)).toBe("11, 12, 13, "));
  it("should repeat boolean n times", () => expect(repeatWord(true, 3)).toBe("true1, true2, true3, "));
})