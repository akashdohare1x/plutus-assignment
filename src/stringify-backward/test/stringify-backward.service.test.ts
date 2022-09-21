import stringifyBackward from "../stringify-backward.service";

describe("Stringify", () => {
  test("stringifyCamelCaseBackward: Should make string from keys and convert it camelCase in backwards", async () => {
    const testObj = {
      first: 4,
      second: 3,
      third: 2,
      fourth: 1,
    };
    expect(stringifyBackward(testObj)).toEqual("htruofDrihtDnocesTsrif");
  });

  test("stringifyCamelCaseBackward: Should make string from keys and convert it camelCase in backwards", async () => {
    const testObj = {
      January: 4,
      Feburary: 3,
      March: 2,
      April: 1,
    };
    expect(stringifyBackward(testObj)).toEqual("lirpaHcramYrarubefYraunaj");
  });

  test("stringifyCamelCaseBackward: Should make string from keys and convert it camelCase in backwards", async () => {
    const testObj = {
      Monday: 4,
      Tuesday: 3,
      wednesday: 2,
      friday: 1,
    };
    expect(stringifyBackward(testObj)).toEqual("yadirfYadsendewYadseutYadnom");
  });
});
