import { IdentityImplementation } from "../identity.monad.service";

describe("Identity Monad", () => {
  const value = 5;
  const identity = new IdentityImplementation(value);
  const identityValue = identity.getIdentity();

  test("It should return the initialized value", async () => {
    expect(identityValue).toEqual(value);
  });
  test("Bind return the appropriate addition", async () => {
    const result = identity.bind((value1: number) =>
      new IdentityImplementation(4).bind((value2: number) => value1 + value2)
    );
    expect(result).toEqual(9);
  });
});
