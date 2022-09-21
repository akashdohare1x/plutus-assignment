import stringify from "../stringify.service";

describe("Stringify", () => {
  test("stringifyCamelCase: Should make string from keys and convert it camelCase", async () => {
    const testObj = {
      first: 4,
      second: 3,
      third: 2,
      fourth: 1,
    };
    expect(stringify(testObj)).toEqual("firstSecondThirdFourth");
  });

  test("stringifyCamelCase: Should make string from keys and convert it camelCase", async () => {
    const testObj = {
      January: 4,
      Feburary: 3,
      March: 2,
      April: 1,
    };
    expect(stringify(testObj)).toEqual("januaryFeburaryMarchApril");
  });

  test("stringifyCamelCase: Should make string from keys and convert it camelCase", async () => {
    const testObj = {
      Monday: 4,
      Tuesday: 3,
      wednesday: 2,
      friday: 1,
    };
    expect(stringify(testObj)).toEqual("mondayTuesdayWednesdayFriday");
  });
});
