import { Either, Left, Right, caseOf } from "../either.monad.service";

describe("Either Monad", () => {
  const str = "Akash";
  const x: Either<string, Error> = new Left(str);
  const y = new Right(new Error());

  test("Error state", async () => {
    const result = caseOf(y, {
      left: (v) => v,
      right: (v) => v,
    });
    expect(typeof result).toBe("object");
  });
  test("OK state", async () => {
    const result = caseOf(x, {
      left: (v) => v,
      right: (v) => v,
    });
    expect(result).toEqual(str);
  });

  test("getValue", async () => {
    expect(x.getValue()).toEqual(str);
    expect(typeof y.getValue()).toEqual("object");
  });
});
